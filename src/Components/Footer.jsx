import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://ak-portfolio.netlify.app">
          Docker hub
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const useStyles = makeStyles((theme) => ({
    footer: {
      padding: theme.spacing(3, 2),
      marginTop: 'auto',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
  }));
  


const Footer = () => {
const classes = useStyles();
return(
<footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1" align="center">Powered by Akshay Bisht 😎</Typography>
          <Copyright />
        </Container>
      </footer>
)}

export default Footer;