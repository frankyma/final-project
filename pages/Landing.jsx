/*************************************************** 
                Landing.jsx

Home page of the application

Orders the components that make up the Home page.
Corresponds to route path='/'

Change History:
    Pam - Component creation.                  
*************************************************** */

import Container from '@mui/material/Container';
import NavBar from '../src/components/NavBar.jsx';
import Footer from '../src/components/Footer.jsx';
import Hero from '../src/components/Hero.jsx';
import Content from '../src/components/Content.jsx';



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
