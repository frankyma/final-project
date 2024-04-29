/*************************************************** 
                App.jsx
Entry point.

Change History:
    Pam - Added routing. Remove unused imports.
          Move container and Box into individual pages 
          Remove unused imports (Lint)                
*************************************************** */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carousel from "./pages/Carousel.jsx";
import ImageGrid from "./pages/ImageGrid.jsx";
import Landing from "./pages/Landing.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Carousel" element={<Carousel />} />
        <Route path="/ImageGrid" element={<ImageGrid />} />
      </Routes>
    </BrowserRouter>
  );
}
