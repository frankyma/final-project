/*************************************************** 
                Landing.jsx

Home page of the application

Orders the components that make up the Home page.
Corresponds to route path='/'

Change History:
    Pam - Component creation.                  
*************************************************** */

import Container from "@mui/material/Container";
import NavBar from "../components/NavBar";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Hero from "../components/Hero.jsx";

function Landing() {
  return (
    <Container disableGutters maxWidth={false}>
      <NavBar></NavBar>
      <Hero />
      <Content />
      <Footer />
    </Container>
  );
}

export default Landing;
