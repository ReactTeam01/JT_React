import React from 'react'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import AboutDescription from '../about/AboutDescription';
import AboutOtherSide from '../about/AboutOtherSide'
import AboutOurWork from '../about/AboutOurWork'
import AboutTheComapny from '../about/AboutTheComapny'
import AboutYear from '../about/AboutYear'
import './About.css'

const About = () => {
  return (
    <>

      <BrowserRouter>
      <AboutDescription/>
        <div className='container-fluid about'>
          <div className="row vh-60">
            <div className="col-md-3 centerthelink">
              <div className=''>
                <ul>
                  <li>
                    <Link className="home_li" to="/">The Comapny</Link>
                  </li>
                  <li>
                    <Link className="home_li" to="/ourwork">Our Work</Link>
                  </li>
                  <li>
                    <Link className="home_li" to="/otherside">Other Side</Link>
                  </li>
                  <li>
                    <Link className="home_li" to="/year">Year</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9 centerthelink">

              <Routes>
                <Route index exact path="/" element={<AboutTheComapny />} />
                <Route exact path="/ourwork" element={<AboutOurWork />} />
                <Route exact path="/otherside" element={<AboutOtherSide />} />
                <Route exact path="/year" element={<AboutYear />} />
                {/* <Route path="*" element={<NotFound />} /> */}
              </Routes>
            </div>
          </div>
        </div>


      </BrowserRouter>
    </>
  )
}

export default About