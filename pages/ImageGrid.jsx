import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function ImageGrid() {

  return (

    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Project Image page
        </Typography>
        <Copyright />
      </Box>
    </Container>
);
}

export default ImageGrid;