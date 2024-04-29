/*************************************************** 
                Footer.jsx

Displays main content of landing page.

Uses Material UI  library components that pass 
props for styling. Layout done with Material UI
grid components

Change History:
    Pam - Component creation.
    Pam - Add link to GIPHY                  
*************************************************** */
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const Footer = () => {
    return (
      <Box
        sx={{
          minHeight: '100px',
          backgroundColor: 'lightsteelblue',
          color: 'black',
          paddingTop: 5,
          paddingLeft: 5,
          border: '1px solid black',
        }}
      >
  
  <Grid container
    direction="row"
    justifyContent="center"
    alignItems="center"
    textAlign= 'center'

  >
        <Grid item xs={12} md={6}>
        <span>&copy; 2024 Frank Ma and Pam Novak</span>
        </Grid>
        <Grid item xs={12} md={6}>
        <span>GIFs courtesy of <a href="https://giphy.com" target= "_blank" >Giphy.com</a></span>
        </Grid>
    
   </Grid>
  
      </Box>
    );
  };
  
  export default Footer;