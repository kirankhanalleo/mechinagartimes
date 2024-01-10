import React from 'react'
import "./Navbar.scss"
import logo from "../../../assets/images/logo.png"
import { CiSearch  } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
const Navbar = () => {
  return (
    <div className='navbar'>
       <div className="navbarContents">
        <div className="navbarLogo">
                <img src={logo} alt="mechinagartimes-logo" />
            </div>
            <div className="navbarLinks">
                <span className="link">Politics</span>
                <span className="link">Business</span>
                <span className="link">Technology</span>
                <span className="link">Education</span>
                <span className="link">Science</span>
                <span className="link">Sports</span>
            </div>
            <div className="navbarRight">
                <span className="navbarSearch">
                    <CiSearch className='searchIcon'/>
                    <input type="text" placeholder='Search News' />
                </span>
                <span className="navbarToggler">
                    <IoMdMenu className='menuIcon'/> 
                </span>
            </div>
       </div>
    </div>
  )
}

export default Navbar