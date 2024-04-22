import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Landing from '../pages/Landing.jsx';
import Carousel from '../pages/Carousel.jsx';
import ImageGrid from '../pages/ImageGrid.jsx';


export default function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/Carousel' element={<Carousel />} />
            <Route path='/ImageGrid' element={<ImageGrid />} />
          </Routes>
        </Box>
      </Container>
    </BrowserRouter>

  );
}