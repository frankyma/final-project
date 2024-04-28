/*************************************************** 
                Carousel.jsx

Initiates a GIF search. Displays fetched images.

Uses a Material UI List library component.

Change History:
    Pam - Create skeleton component to test routing. 
    Frank - 
    Pam - Add Header and Footer, component styling.
          Hide save button                 
*************************************************** */
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
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
        height: '100vh',
        backgroundColor: 'gainsboro',
        textAlign: 'center',
        paddingBottom: '1px',}}
    >

      <Box
          justifyContent="center"
          alignItems="start"
          sx={{
            minHeight: '90vh',
            backgroundColor: 'gainsboro',
            textAlign: 'center',
            marginTop: '20px',
            marginBottom: '5px',
            paddingBottom: '20px',}}
          >



        <TextField
          variant="outlined"
          defaultValue="Gif Search"
          label="Keyword"
          value={gifSearch}
          onChange={(e) => setGifSearch(e.target.value)}
        ></TextField>

          <Button variant="contained" onClick={fetchGifs}
                sx={{ m: 3 }}
        >
          Search
        </Button>

       

        {giphyResponse?.data && (
        <Button variant="contained" onClick={onSaveGif}>
          Save
        </Button>
        )}

</Box>

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
      <Footer />
      </>
  );
}

export default Carousel;
