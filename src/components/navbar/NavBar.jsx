import React, { useState } from 'react';
import './navbar.css';
import {FaUserCircle} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import img from '../../imgs/logo1.png'
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    // <div className=''>
    //     <img src={img} alt="" className='trove__logo' />
      
          <div className="trove__navbar">
          <div className="trove__navbar-sign">
            <FaUserCircle/> 
            <p><a href='/signin'>Sign in</a></p>
            <p className='trove__signup'><a href='/signup' >Sign up</a></p>
          </div>
        </div>
    // </div>
    
  );
};

export default Navbar;