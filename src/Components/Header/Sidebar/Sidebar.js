import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {MdClose} from 'react-icons/md'
import './Sidebar.css'
const Sidebar = ({sideBarOpen, sideBarToggle}) => {
  const images = [
    {
      id : 1,
      link : "https://devplus.edu.vn/assets/images/devplus/1.png"
    },
    {
      id : 2,
      link : "https://devplus.edu.vn/assets/images/devplus/2.png"
    },
    {
      id : 3,
      link : "https://devplus.edu.vn/assets/images/devplus/3.png"
    },
    {
      id : 4,
      link : "https://devplus.edu.vn/assets/images/devplus/4.png"
    },
    {
      id : 5,
      link : "https://devplus.edu.vn/assets/images/devplus/5.png"
    },
    {
      id : 6,
      link : "https://devplus.edu.vn/assets/images/devplus/6.png"
    }
  ]
  return (
    <div className={`side-bar ${sideBarOpen ? "side-bar-open" : ""}`} >
          <div class="close-button" onClick={sideBarToggle}>
            <MdClose class = 'icon'/>
          </div>
          
          <div class="side-bar-logo">
            <img
              src="https://devplus.edu.vn/assets/images/Artboard_2.png"
              alt="website logo"
            />
          </div>
          
          <div class="description">
            <span>
              Devplus's mission is filling the gap between school and
              corporate, reduce in-house training cost and effort for IT
              companies.
            </span>
            
          </div>
          
          <div class="sidebar-images">
            {
              images.map(image =>{
                return <div className="image" id={image.id}>
                  <img src={image.link} alt="" />
                </div>
              })
            }
          </div>
          <div class="map">
            <img src="https://devplus.edu.vn/assets/images/map.png" alt="" />
          </div>
          
          <div class="facebook">
            <a href="https://www.facebook.com/Devplusprogramme">
              <BsFacebook/>
            </a>
          </div>
        </div>
  )
}

export default Sidebar