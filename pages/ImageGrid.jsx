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
import { savedGifsFetcher, updateGifs } from "../src/api/api";
import Footer from "../src/components/Footer";
import NavBar from "../src/components/NavBar.jsx";
import GifCategoryList from "../src/components/GifCategoryList";
import useSWRMutation from "swr/mutation";

function ImageGrid() {
  const { data: savedGifs } = useSWR("savedGifs", savedGifsFetcher);

  const { trigger: updateSavedGifs } = useSWRMutation("savedGifs", updateGifs);

  const handleDelete = ({ category, url }) => {
    updateSavedGifs({
      ...savedGifs.record,
      [category]: savedGifs.record[category].filter((item) => item !== url),
    });
  };

  return (
    <>
      <NavBar></NavBar>
      <Box
        display="flex"
        flexDirection={"column"}
        justifyContent="center"
        alignItems="center"
        sx={{
          minHeight: "100vh",
          backgroundColor: "gainsboro",
          textAlign: "center",
          paddingBottom: "5px",
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          GIF Gallery
        </Typography>
        {savedGifs?.record &&
          Object.entries(savedGifs.record).map(([key, value]) => (
            <GifCategoryList
              key={key}
              category={key}
              urlList={value}
              onDelete={handleDelete}
            />
          ))}
      </Box>
      <Footer />
    </>
  );
}

export default ImageGrid;
