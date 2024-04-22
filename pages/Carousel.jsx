import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';

function Carousel({ userName }) {

  return (

    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Project Carousel page
        </Typography>
        <Copyright />
      </Box>
    </Container>
);


}

export default Carousel;