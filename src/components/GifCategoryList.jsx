/*************************************************** 
                ImageGrid.jsx

Shows a single category of Gifs in a list format.

Change History:
    Frank - Show Gifs using MUI Cards.
*************************************************** */

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

import PropTypes from "prop-types";

export default function GifCategoryList({ category, urlList, onDelete }) {
  return (
    <>
      <Typography variant="h4" component="h1">
        {category.toUpperCase()}
      </Typography>
      {urlList.map((url, index) => (
        <Card key={index} sx={{ minWidth: "40%", marginBottom: "1rem" }}>
          <CardContent>
            <img src={url} alt={category} style={{ height: 240 }} />
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              onClick={() => onDelete({ category, url })}
              sx={{ margin: "auto" }}
            >
              Delete
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
}

GifCategoryList.propTypes = {
  category: PropTypes.string,
  urlList: PropTypes.array,
  onDelete: PropTypes.func,
};
