import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, Button, IconButton, AppBar, Grid, Drawer, MenuItem, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import logos from "../images/logo.png";
import "../css/header.css";
import { Link } from "react-router-dom";
import RssFeedIcon from '@material-ui/icons/RssFeed';
import VideocamIcon from '@material-ui/icons/Videocam';
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
              Videos
            </Button>
            </Link>
            <Link to="/news">
              <Button color="inherit" variant="outlined" className={classes.Btns}>
                News
              </Button>
            </Link>
              <Link to="/about">
            <Button color="inherit" variant="outlined" className={classes.Btns}>
              About
            </Button>
            </Link>
            <Link to="/soon">
            <Button color="inherit" variant="outlined" className={classes.Btns}>
              Coming soon...
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
      <VideocamIcon className={classes.icn}/>
      <Typography align="right">
       Video
       </Typography>
      </MenuItem>
      </Link>

      <Link to="/news" className={classes.links}>
      <MenuItem className={classes.menuItems}>
      <RssFeedIcon className={classes.icn}/> News
      </MenuItem>
      </Link>

      <Link to="/about" className={classes.links}>
      <MenuItem className={classes.menuItems}>
      <InfoIcon className={classes.icn}/> About
      </MenuItem>
      </Link>

      <Link to="/soon" className={classes.links}>
      <MenuItem className={classes.menuItems}>
      <SettingsIcon className={classes.icn}/> Coming soon
      </MenuItem>
      </Link>

        </Drawer>
    </div>
  );
}
