/*************************************************** 
                Hero.jsx

Displays a banner image and x-y positioned text.
Allows text placement anywhere within the component.

Uses a mix of styled-components and Material UI 
library components that pass props for styling.

<StyledImg> - an image file filling the component
<StyledQuote> - text positioned relative to "top" 
                and "left" coordinates passed as 
                props.

Change History:
    Pam - Component creation.  
    Pam - Add props to <StyledQuote>                
*************************************************** */
import Box from '@mui/material/Box';
import gradient from "../assets/gradient.jpg";
import styled from "styled-components";



const StyledImg = styled.img `

    width: 100%;
    height: 250px;
    background-size: cover;
    position: relative;
    margin: 0;
    padding: 0;
    object-fit: cover;
`

const StyledQuote = styled.p `
    position: absolute;
    top: ${props => props.top ? props.top : '10px'};
    left: ${props => props.left ? props.left : '10px'};
    color: gainsboro;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 18pt;
    font-family: 'Comic Sans MS';
    font-weight: 400;
  `

function Hero() {
    return (
      <Box
        sx={{
          minHeight: '250px',
          position: 'relative'
        }}
      >
        <StyledImg src={gradient} alt="inspirational quotes"/>
        {/* position from edge */}
        <StyledQuote top='15%' left='10%' >Capture a moment...</StyledQuote>
        <StyledQuote top='35%' left='35%' >Convey an emotion...</StyledQuote>
        <StyledQuote top='50%' left='65%' >Express an idea...</StyledQuote>

      </Box>
    );
  }
  
  export default Hero;