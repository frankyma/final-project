/*************************************************** 
                Carousel.jsx

Initiates a GIF search. Displays fetched images.

Uses a Material UI List library component.

Change History:
    Pam - Create skeleton page to test routing. 
    Frank - Load and view GIFs from Giphy API.  
    Frank - Show Gifs on Swiper carousel, and implement Save functionality. 
    Pam - Add Header and Footer, flexbox layout
          and styling. Hide save button when
          carousel is hidden.               
*************************************************** */
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, TextField } from "@mui/material";
import useSWRMutation from "swr/mutation";
import { gifFetcher, savedGifsFetcher, updateGifs } from "../api/api.js";
import { useCallback, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import useSWR from "swr";
import styled from "styled-components";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { newGifDict } from "../utils/utils.js";

import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

const Img = styled.img`
  height: 400px;
`;

function Carousel() {
  const [gifSearch, setGifSearch] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data: savedGifs } = useSWR("savedGifs", savedGifsFetcher);
  const { trigger: fetchGifs, data: giphyResponse } = useSWRMutation(
    gifSearch,
    gifFetcher
  );
  const { trigger: updateSavedGifs } = useSWRMutation("savedGifs", updateGifs);

  // Save the current GIF to jsonbin
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

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          minHeight: "100vh",
          backgroundColor: "gainsboro",
          textAlign: "center",
          paddingBottom: "5px",
        }}
      >
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              sx={{
                mb: 3,
                mt: 10,
                fontWeight: "bold",
                fontSize: 20,
                fontFamily: "Comic Sans MS",
              }}
            >
              Search all GIFs
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Box>
              <TextField
                variant="outlined"
                label="Keyword"
                value={gifSearch}
                onChange={(e) => setGifSearch(e.target.value)}
                sx={{ mt: 4 }}
              ></TextField>

              <Button
                variant="contained"
                onClick={fetchGifs}
                sx={{ ml: 3, mt: 5 }}
              >
                Search
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box>
              {giphyResponse?.data && (
                <Swiper
                  onSlideChange={(swiper) =>
                    setCurrentIndex(swiper.activeIndex)
                  }
                  modules={[Navigation, Pagination]}
                  navigation={true}
                  pagination={true}
                >
                  {giphyResponse?.data?.map((gif) => (
                    <SwiperSlide key={gif.id}>
                      <Img src={gif.images.original.url} alt={gif.title} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </Box>
          </Grid>
          <Grid item xs={12}>
            {giphyResponse?.data && (
              <Button variant="contained" onClick={onSaveGif} sx={{ mt: 5 }}>
                Save
              </Button>
            )}
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </>
  );
}

export default Carousel;
