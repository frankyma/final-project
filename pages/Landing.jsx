import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function Landing() {
  
  return (

      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            Project Landing page
          </Typography>
        </Box>
      </Container>
  );
   
}

export default Landing;
