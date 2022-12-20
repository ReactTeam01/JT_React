import React from 'react'
import Aboutus from '../../Img/Aboutus.jpg'

const AboutDescription = () => {
  return (
    <>
    <div className='text-center mt-5'>
            <h1 >About Us</h1>
        </div>
        <div className='my-5'>
        <img src={Aboutus} alt="" srcset="" className='w-100'/>
        </div>
        
    </>
  )
}

export default AboutDescription