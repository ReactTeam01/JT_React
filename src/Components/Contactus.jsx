import contactbaner from "../Img/Screenshot 2022-12-25 094123.jpg";
import contactus from "../Img/contactus.jpg";
import AboutDescription from "./about/AboutDescription";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import "./Contact.css"
const Contactus=()=>{
    return(
        <>
            <AboutDescription aSrc={contactbaner}/>
            <div className="mainContact py-5 ">                
                <div className="container">
                    <div className="row RBox border py-4">
                        <div className="col-md-6">
                            <div className="ContactBox">
                                <from>
                                    <div className="NameField">
                                        <label>Full Name:</label>
                                        <input type="text" 
                                        name="name" 
                                        value="" 
                                        placeholder="Enter Name .." 
                                        autocomplete="off"/>
                                    </div>

                                    <div className="NameField">
                                        <label>Email:</label>
                                        <input type="Email" 
                                        name="Email" 
                                        value=""
                                         placeholder="Enter Email .."
                                        autocomplete="off"/>
                                    </div>

                                    <div className="NameField">
                                        <label>Mobile No:</label>
                                        <input type="number"
                                         name="number"
                                         value=""
                                        placeholder="Enter Number .."
                                        autocomplete="off"/>
                                    </div>

                                    <div className="NameField">
                                        <label>Massage</label>
                                        <textarea type="massage" 
                                        placeholder="Enter Massage here" 
                                        name="massage"
                                        autocomplete="off"></textarea> 
                                    </div>

                                    <div className="NameField">
                                        <input type="submit" value="submit" className="btn btn-danger my-2"/>
                                    </div>
                                </from>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="cImg">
                            <iframe src={"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7404.050262756745!2d83.343994!3d21.895108!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a27252443b98413%3A0x2aa33d07b54c6b42!2sJAGDAMBA%20TRAILERS%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1671943367197!5m2!1sen!2sin"} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="img-thumbnail"></iframe>
                            </div>
                        </div>
                        
                        <div className="col-md-12">
                            <div className="cBigboc py-5">
                                <div className="row">
                                     <div className="col-md-3 ">
                                        <a href="#" className="watsappbtn img-thumbnail text-center btn btn-success d-block">
                                            <WhatsAppIcon className="fs-2"/>
                                            <p  className="fs-5">WhatsApp Now</p>
                                        </a>
                                    </div>
                                    <div className="col-md-3 ">
                                        <a href="tel:8770424760" className="watsappbtn img-thumbnail text-center btn btn-info d-block">
                                            <ContactPhoneIcon className="fs-2"/>
                                            <p  className="fs-5">Call Us</p>
                                        </a>
                                    </div>
                                    <div className="col-md-3 ">
                                        <a href="mailto:gyan@jagdambatrailers.com" className="watsappbtn img-thumbnail text-center btn btn-danger d-block">
                                            <ForwardToInboxIcon className="fs-2"/>
                                            <p  className="fs-5">Email Us</p>
                                        </a>
                                    </div>
                                    <div className="col-md-3 ">
                                        <a href="https://goo.gl/maps/4j2GaESLEufAACtEA" className="watsappbtn img-thumbnail text-center btn btn-primary d-block">
                                            <AddLocationIcon className="fs-2"/>
                                            <p  className="fs-5">Get Loction</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Contactus;