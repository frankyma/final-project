/*************************************************** 
                Carousel.jsx

Initiates a GIF search. Displays fetched images.

Uses a Material UI List library component.

Change History:
    Pam - Create skeleton page to test routing. 
    Frank - 
    Pam - Add Header and Footer, flexbox layout
          and styling. Hide save button when
          carousel is hidden.               
*************************************************** */
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import { Button, TextField } from "@mui/material";
import useSWRMutation from "swr/mutation";
import { gifFetcher, savedGifsFetcher, updateGifs } from "../src/api/api";
import { useCallback, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import useSWR from "swr";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { newGifDict } from "../src/utils/utils";

import NavBar from '../src/components/NavBar.jsx';
import Footer from '../src/components/Footer.jsx';

function Carousel() {
  const [gifSearch, setGifSearch] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data: savedGifs } = useSWR("savedGifs", savedGifsFetcher);
  const { trigger: fetchGifs, data: giphyResponse } = useSWRMutation(
    gifSearch,
    gifFetcher
  );
  const { trigger: updateSavedGifs } = useSWRMutation("savedGifs", updateGifs);

  const onSaveGif = useCallback(() => {
    const gifKey = gifSearch.toLowerCase();
    const gifUrl = giphyResponse?.data[currentIndex]?.images.original.url;
    gifUrl && updateSavedGifs(newGifDict(savedGifs?.record, gifUrl, gifKey));
  }, [
    currentIndex,
    gifSearch,
    giphyResponse?.data,
    savedGifs?.record,
    updateSavedGifs,
  ]);

  return (
    
    <>
    <NavBar></NavBar>

    <Box display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: '100vh',
        backgroundColor: 'gainsboro',
        textAlign: 'center',
        paddingBottom: '5px',}}
    >
            
      <Grid container spacing={5}>

        <Grid item xs={12}>
          <Typography variant="h5" sx={{ mb: 3, mt:10, fontWeight: 'bold', fontSize: 20, fontFamily: 'Comic Sans MS'}}>  
          Search all GIFs
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Box>
            <TextField
              variant="outlined"
              defaultValue="Gif Search"
              label="Keyword"
              value={gifSearch}
              onChange={(e) => setGifSearch(e.target.value)}
              sx={{ mt: 4 }}
            ></TextField>

            <Button variant="contained" onClick={fetchGifs}
                    sx={{ ml: 3, mt: 5 }}
            >
              Search
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12}>
          {giphyResponse?.data && (
                <Button variant="contained" onClick={onSaveGif}
                        sx={{mt: 5 }} 
                >
                  Save
                </Button>
                )}
        </Grid>

        <Grid item xs={12}>
          <Box>
            {giphyResponse?.data && (
                <Swiper
                  onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
                  modules={[Navigation, Pagination]}
                  navigation={true}
                  pagination={true}
                >
                  {giphyResponse?.data?.map((gif) => (
                    <SwiperSlide key={gif.id}>
                      <img src={gif.images.original.url} alt={gif.title} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}            
            </Box>
        </Grid>
        
      </Grid>
        
    </Box>

    <Footer />
      </>
  );
}

export default Carousel;
