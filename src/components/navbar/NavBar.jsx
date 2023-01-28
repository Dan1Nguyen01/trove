import React, { useState } from 'react';
import './navbar.css';
import SearchingBar from '../searchingbar/SearchingBar';
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
   
      
          <div className="trove__navbar">
           
          <div className="trove__navbar-sign">
           
            <p><a href='/login'>Sign in</a></p>
            <p className='trove__signup'><a href='/signup' >Sign up</a></p>
          </div>
        </div>
    
  );
};

export default Navbar;