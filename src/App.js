import Header from "./Components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import {Switch, Route } from "react-router-dom";

const App = () =>{
  return <>
     <Header/>  
     <Nav/>
     <Home/>        
     <Footer/>
  </>  
}

export default App;