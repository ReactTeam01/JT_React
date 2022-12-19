import Data from "../DataStore";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
const Header =()=>{
    return <>
       <header>
            <div className="mainHeader bg-danger text-white">
                <div className="container">
                    <div className="d-flex Hrow">
                        <div className="Hbox1">
                            <div className="Cbos">
                                <ul className="d-flex list-unstyled gap-3 m-0 p-1">
                                    <li><PhoneAndroidIcon/>{Data[0].contactNO[0]}</li>
                                    <li><EmailIcon/>{Data[0].contactNO[1]}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="Hbox1">
                            <div className="SoicalIcon">
                                <ul className="d-flex list-unstyled gap-3 m-0 p-1">
                                    <li>
                                        <a>
                                            <FacebookIcon/>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <LinkedInIcon/>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <YouTubeIcon/>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <InstagramIcon/>
                                        </a>
                                    </li>
                                </ul>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </header> 
    </>
}

export default Header;