/*************************************************** 
                ImageGrid.jsx

Initiates a GIF search. Displays fetched images.

Uses a Material UI List library component.

Change History:
    Pam - Create skeleton page to test routing. 
    Frank - 
    Pam - Add Header and Footer.             
*************************************************** */
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useSWR from "swr";
import { savedGifsFetcher } from "../src/api/api";
import Footer from "../src/components/Footer";
import NavBar from '../src/components/NavBar.jsx';



function ImageGrid() {
  const { data: savedGifs } = useSWR("savedGifs", savedGifsFetcher);
  console.log("🚀 ~ ImageGrid ~ savedGifs:", savedGifs);

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
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          GIF Gallery
        </Typography>
  
    </Box>
    <Footer />
    </>
  );
}

export default ImageGrid;
