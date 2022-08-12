import React from 'react'
import { FaAngleDown } from 'react-icons/fa'
import {MdClose} from 'react-icons/md'
import Sidebar from '../Sidebar/Sidebar'
import './Navbar.css'
import { useState } from 'react'
const Navbar = () => {
  const [menuOpen,setMenuOpen] = useState(false)
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const [submenuOpen, setSubmenuOpen] = useState(false)

  const menuToggle = () =>{
    const windowWidth = window.innerWidth;
    if(windowWidth > 1000){
      setSideBarOpen(!sideBarOpen)
    }else
    setMenuOpen(!menuOpen)
  }
  const submenuToggle = () =>{
    setSubmenuOpen(!submenuOpen)
  }
  // const windowWidth = window.innerWidth;
  // console.log(windowWidth)
  return (
    <header>
      <nav class="navbar">
        <div className={`navbar-logo`}>
         <a href="#"> <img
          src="https://devplus.edu.vn/assets/images/Artboard_2.png"
          alt="website logo"
        /></a>
        </div>
        <div class={`navbar-links ${menuOpen ? 'navbar-open' : ''}`}>
          <li class="navbar-link"><a class="navbar-link-title" href="#">Home</a></li>
            <li class="navbar-link"><a class="navbar-link-title" href="#">About devplus</a></li>
            <li class="navbar-link">
                <div class="link">
                    <div class="title">
                        <p>Web Design</p>
                    </div>
                    <div class="submenu-open-btn" onClick={submenuToggle}><FaAngleDown/></div>
                </div>
                
                <ul class={`submenu ${submenuOpen ? "submenu-open":""}`}>
                    <li><a href="#">One Plus Campus</a></li>
                    <li><a href="#">Two Plus Campus</a></li>
                    <li><a href="#">Three Plus Campus</a></li>
                    <div class="submenu-close-btn" onClick={submenuToggle}><MdClose /> Close</div>
                  </ul>

                  
            </li>
            <li class="navbar-link"><a class="navbar-link-title" href="#">Devplus Activities</a></li>

        </div>
        
        <div class={`navbar-icons ${menuOpen ? "open" :""}`} onClick={menuToggle}>
          <div class="navbar-icon"></div>
        </div>
        </nav>
        <Sidebar sideBarOpen = {sideBarOpen} sideBarToggle = {menuToggle}/>
        </header>
  )
}
export default Navbar
