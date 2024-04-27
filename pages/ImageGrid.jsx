import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useSWR from "swr";
import { savedGifsFetcher } from "../src/api/api";

function ImageGrid() {
  const { data: savedGifs } = useSWR("savedGifs", savedGifsFetcher);
  console.log("🚀 ~ ImageGrid ~ savedGifs:", savedGifs);

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Project Image page
        </Typography>
      </Box>
    </Container>
  );
}

export default ImageGrid;
