/*************************************************** 
                Content.jsx

Displays main content of landing page.

Uses a Material UI List library component.

Change History:
    Pam - Component creation.                  
*************************************************** */

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: steelblue;
  border: 1px solid black;
  border-radius: 20px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 14pt;
  color: white;
`;

const Content = () => {
  return (
    <Box
      sx={{
        minHeight: "250px",
        backgroundColor: "gainsboro",
        textAlign: "center",
        marginTop: "0",
        paddingBottom: "30px",
      }}
    >
      <Box display="flex" justifyContent="center" alignItems="center">
        <List>
          <ListItem>
            <ListItemIcon>
              <ArrowRightAltOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Search using a keyword" />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <ArrowRightAltOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary="View a slideshow of your matches
                "
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <ArrowRightAltOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Select and save the ones you love" />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <ArrowRightAltOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Review your saved GIFs" />
          </ListItem>
        </List>
      </Box>

      <Typography
        variant="h4"
        sx={{
          mb: 3,
          mt: 3,
          ml: 4,
          fontWeight: "bold",
          fontSize: 15,
          fontFamily: "Comic Sans MS",
        }}
      >
        Give your content maximum impact.
      </Typography>

      <Typography
        variant="h5"
        sx={{
          mb: 3,
          mt: 3,
          ml: 4,
          fontWeight: "bold",
          fontSize: 15,
          fontFamily: "Comic Sans MS",
        }}
      >
        The possibilities are endless.
      </Typography>

      <NavLink to="/Carousel">
        <StyledButton>Search Now </StyledButton>
      </NavLink>
    </Box>
  );
};

export default Content;
