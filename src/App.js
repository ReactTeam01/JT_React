import Header from "./Components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
<<<<<<< HEAD
import {Switch, Route } from "react-router-dom";
=======
import About from "./Components/SmallComponents/About";
>>>>>>> de80a2e9ab470922e62b61e3a94802088b1d568a

const App = () =>{
  return <>
     <Header/>  
     <Nav/>
<<<<<<< HEAD
     <Home/>        
     <Footer/>
=======
     <Home/>
     <About/>
>>>>>>> de80a2e9ab470922e62b61e3a94802088b1d568a
  </>  
}

export default App;