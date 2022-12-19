import Header from "./Components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Nav from "./Components/Nav";
import Home from "./Components/Home";

const App = () =>{
  return <>
     <Header/>
     <Nav/>
     <Home/>
  </>  
}

export default App;