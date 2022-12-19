import Hero from "./SmallComponents/Hero";
import About from "./SmallComponents/About";
import Service from "./SmallComponents/Service";
import Img from "../img"
const Home =(props)=>{
    return <>
        <Hero img={Img}/>
        <Service/>
    </>
}

export default Home;