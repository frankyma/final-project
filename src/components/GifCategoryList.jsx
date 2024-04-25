import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

export default function GifCategoryList({ category, urlList }) {
  return (
    <>
      <Typography variant="h4" component="h1">
        {category}
      </Typography>
      {urlList.map((url, index) => (
        <Card key={index} sx={{ minWidth: 275 }}>
          <CardContent>
            <img src={url} alt={category} style={{ height: 200 }} />
          </CardContent>
          <CardActions>
            <Button size="small">Delete</Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
}