import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import useSWRMutation from "swr/mutation";
import { gifFetcher } from "../src/api/api";
import { useState } from "react";

function Carousel() {
  const [gifSearch, setGifSearch] = useState(""); // [1
  const { trigger: fetchGifs, data: gifs } = useSWRMutation(
    gifSearch,
    gifFetcher
  );

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
      </Box>
    </Container>
  );
}

export default Carousel;
