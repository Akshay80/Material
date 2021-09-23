import logo from "./logo.svg";
import Header from "./Components/Header";
import Videos from "./Components/Videos";
import About from "./Components/About";
import Soon from "./Components/Soon";
import News from "./Components/News";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Footer from "./Components/Footer";
import CookieConsent from "react-cookie-consent";
import React from "react";
// import './App.css';

<>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
    rel="stylesheet"
  ></link>
</>;

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Videos} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
          <Route path="/soon" component={Soon} />
        </Switch>
      </Router>
      <Footer />
      <CookieConsent
        style={{
          // backgroundColor: "#D9AFD9",
          // backgroundImage: "linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)",
          backgroundImage: 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)',
          color: "black",
          fontFamily: "'Lora', serif",
          fontSize: "18px"
          
        }}
        buttonText={"Ok, I Understand!"}
        buttonStyle={{
          borderRadius: 35,
          // background: "rgb(2,0,36)",
          // background:
          //   "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(26,121,9,1) 62%, rgba(0,212,255,1) 100%)",
          padding: "13px 45px",
          backgroundColor: "#00DBDE",
          backgroundImage: "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)",
          color: "#ffffff",
          // border: "2px solid white",
          fontSize: "15px",
        }}
        debug={true}
      >
        We use our own and third-party cookies to personalize content and to
        analyze web traffic.{" "}
        <a href="https://www.google.com" color="white!important">
          Read more about cookies
        </a>
      </CookieConsent>
    </React.Fragment>
  );
}

export default App;
