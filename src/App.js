import logo from './logo.svg';
import Header from './Components/Header';
import Home from './Components/Home';
import Services from './Components/Services';
import About from './Components/About';
import Contact from './Components/Contact';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Footer  from './Components/Footer';
// import './App.css';

function App() {
  return (
    <div>
      <Router>
      <Header />
      <Switch>
          <Route exact path="/" component={Home}>
            <Home />
          </Route>
          <Route path="/about" component={About}>
            <About />
          </Route>
          <Route path="/services" component={Services}>
            <Services />
          </Route>
          <Route path="/contact" component={Contact}>
            <Contact />
          </Route>
        </Switch>
        </Router>
      <Footer/>
    </div>
  );
}

export default App;
