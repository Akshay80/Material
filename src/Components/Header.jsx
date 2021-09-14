import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, Button, IconButton, AppBar, Grid, Drawer, MenuItem, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import logos from "../images/logo.png";
import "../css/header.css";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import CallIcon from "@material-ui/icons/Call";
import SettingsIcon from "@material-ui/icons/Settings";
import InfoIcon from "@material-ui/icons/Info";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    '&:hover':{
      textDecoration: "none",
      backgroundColor: "#3f51b5"
    },
  },
  title: {
    flexGrow: 1,
  },
  Btns: {
    marginRight: 10
  },
  icn: {
    paddingRight:10
  },
  links: {
    textDecoration: 'none', color:"gray"
  },
  menuItems: {
    padding:"15px", width:200, paddingLeft:30
  }
  

}));



export default function Header() {
  const classes = useStyles();
  const [cartOpen, setCartOpen] = useState(false);

  function myCart()
  {
    setCartOpen(true);
  }



  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            disableRipple={true}
          >
            <img src={logos} alt="logo"height="80" width="80" />
          </IconButton>
          <div id="menus" style={{ flexGrow: 1, textAlign: "end", float: "right", paddingRight: 15 }}>
            <Link to="/">
            <Button id="btn" color="inherit" variant="outlined" className={classes.Btns}>
              Home
            </Button>
            </Link>
            <Link to="/contact">
              <Button color="inherit" variant="outlined" className={classes.Btns}>
                Contact
              </Button>
            </Link>
              <Link to="/services">
            <Button color="inherit" variant="outlined" className={classes.Btns}>
              Services
            </Button>
            </Link>
            <Link to="/about">
            <Button color="inherit" variant="outlined" className={classes.Btns}>
              About
            </Button>
            </Link>
          </div>
          <div id="menuIcon" onClick={myCart} style={{ flexGrow: 1, textAlign: "end", float: "right" }}>
            <MenuIcon/>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
          anchor="right"
          open={cartOpen}
          onClose={() => setCartOpen(!cartOpen)}
        >

      <Link to="/" className={classes.links}>
      <MenuItem className={classes.menuItems}>
      <HomeIcon className={classes.icn}/>
      <Typography align="right">
       Home
       </Typography>
      </MenuItem>
      </Link>

      <Link to="/contact" className={classes.links}>
      <MenuItem className={classes.menuItems}>
      <CallIcon className={classes.icn}/> Contact
      </MenuItem>
      </Link>

      <Link to="/services" className={classes.links}>
      <MenuItem className={classes.menuItems}>
      <SettingsIcon className={classes.icn}/> Services
      </MenuItem>
      </Link>

      <Link to="/about" className={classes.links}>
      <MenuItem className={classes.menuItems}>
      <InfoIcon className={classes.icn}/> About
      </MenuItem>
      </Link>

        </Drawer>
    </div>
  );
}
