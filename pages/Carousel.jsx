import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import useSWRMutation from "swr/mutation";
import { gifFetcher } from "../src/api/api";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function Carousel() {
  const [gifSearch, setGifSearch] = useState("");
  const { trigger: fetchGifs, data } = useSWRMutation(gifSearch, gifFetcher);

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
        {data?.data && (
          <Swiper
            onSlideChange={(...args) =>
              console.log("slide change, args: ", args)
            }
            modules={[Navigation, Pagination]}
            navigation={true}
            pagination={true}
          >
            {data?.data?.map((gif) => (
              <SwiperSlide key={gif.id}>
                <img src={gif.images.original.url} alt={gif.title} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Box>
    </Container>
  );
}

export default Carousel;
