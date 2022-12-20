import Img from "../img";
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import Buttons from "./SmallComponents/Buttons"
const Nav = ()=>{
   
    return <>
        <nav>
            <div className="mainNav py-2">
                <div className="container">
                    <div className="navBox d-flex py-2">
                        <div className="logo w-25">
                            <a href="/">
                                <img src={Img.logo} className="w-100"/>    
                            </a>    
                        </div> 

                        <div className="navList">
                            <ul className="d-flex list-unstyled gap-4 m-0 ">
                                <li>
                                    <a>Home</a>    
                                </li>  
                                <li>
                                    <a>About</a>    
                                </li> 
                                <li>
                                    <a>Products</a>    
                                </li> 
                                <li>
                                    <a>Contact us</a>    
                                </li>   
                            </ul>    
                        </div>
                       <div>
                         <Buttons icon={<ContactPhoneIcon/>}
                            text="Enquiry Now"
                         />  
                        </div> 
                    </div>    
                </div>    
            </div>    
        </nav>        
    </>
}

export default Nav;