/*************************************************** 
                NavBar.jsx

Header contining navigation routing

Uses a mix of styled-components and Material UI 
library components that pass props for styling.

Implements a menu using styled-component list 
and NavLink library component

Change History:
    Pam - Component creation.   
    Pam - Add icon and Logo               
*************************************************** */
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import GifLogo from '../assets/gif-logo.svg';



const StyledList= styled.ul `

  display: inline-block;
  text-align: left;
 

`
const StyledListItem = styled.li `
 
  color: black;
  font-weight: 400;
  display: inline-block;
  padding-left: 25px;
  

`

const StyledNavLink = styled(NavLink) `
  color: black;
  text-decoration: none;
  &:hover,
  &:focus{
    color: darkred;
  };
  &:active{
    color: blue;
  };

`
const StyledImg = styled.img `
    width: 75px;
    height: 75px;
    display: inline-block;
    margin-left: 3em;
    margin-top: 15px;
    
`

function NavBar(){
  return (
    <Box
      sx={{
        minHeight: '60px',
        backgroundColor: 'lightsteelblue',
        border: '1px solid black',
      }}
    >
    <StyledImg src={GifLogo} alt="GIF Logo" />
 
      <Typography variant="span" sx={{ mb: 3, mt: 3, ml: 4, fontWeight: 'bold', fontSize: 50, fontFamily: 'Comic Sans MS'}}>  
      GIF Factory
      </Typography>

      <Box
      sx={{
        backgroundColor: 'lightsteelblue',
        textAlign: 'center',
      }}
      >
        <Typography variant="h6" sx={{ mb: 0, mt: 2}}>  

        <StyledList>
          <StyledListItem>
            <HomeOutlinedIcon></HomeOutlinedIcon>
            <StyledNavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </StyledNavLink>
          </StyledListItem>

          <StyledListItem>
            <ImageSearchIcon></ImageSearchIcon>
            <StyledNavLink
              to="/Carousel"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Search
            </StyledNavLink>
          </StyledListItem>

          <StyledListItem>
            <GifBoxOutlinedIcon></GifBoxOutlinedIcon>
            <StyledNavLink
              to="/ImageGrid"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              My GIFs
            </StyledNavLink>
          </StyledListItem>

        </StyledList>
        </Typography>
      </Box>
    </Box>
  );
}

export default NavBar;
