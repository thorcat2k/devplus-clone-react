import React from 'react'
import Tilt from 'react-parallax-tilt';
import './Oneplus.css'
const OnePlus = () => {
  return (
    <div className='container-page'>
    <Tilt className="parallax-effect" perspective={1000} scale = {1.05}>
        
      <img className='img-page' src="https://devplus.edu.vn/assets/images/devplus/roadmapdev1.png" alt="" />
    
    </Tilt>
    </div>
    
  )
}

export default OnePlus
