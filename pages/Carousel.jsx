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

function Carousel() {
  const [gifSearch, setGifSearch] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data: savedGifs } = useSWR("savedGifs", savedGifsFetcher);
  const { trigger: fetchGifs, data: giphyResponse } = useSWRMutation(
    gifSearch,
    gifFetcher
  );
  const { trigger: updateSavedGifs, data: mutationResponse } = useSWRMutation(
    "savedGifs",
    updateGifs
  );

  console.log("🚀 ~ Carousel ~ mutationResponse:", mutationResponse);

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
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Project Carousel page
        </Typography>
        <TextField
          variant="outlined"
          defaultValue="Gif Search"
          value={gifSearch}
          onChange={(e) => setGifSearch(e.target.value)}
        ></TextField>
        <Button variant="contained" onClick={fetchGifs}>
          Search
        </Button>
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
        <Button variant="contained" onClick={onSaveGif}>
          Save
        </Button>
      </Box>
    </Container>
  );
}

export default Carousel;
