import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../imgs/logo.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="trove__navbar">
      <div className="trove__navbar-links">
        <div className="trove__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="trove__navbar-links_container">
            <p><a className='trove-links' href="#home">Home</a></p>
            <p><a className='trove-links' href="#trove">Trove</a></p>
            <p><a className='trove-links' href="#premium">Premium</a></p>
            <p><a className='trove-links' href="#download">Download</a></p>
            <p><a className='trove-links' href="#blog">Library</a></p>
        </div>
      </div>
      <div className="trove__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="trove__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="trove__navbar-menu_container scale-up-center">
          <div className="trove__navbar-menu_container-links">
          <p><a className='trove-links' href="#home">Home</a></p>
            <p><a className='trove-links' href="#trove">Trove</a></p>
            <p><a className='trove-links' href="#premium">Premium</a></p>
            <p><a className='trove-links' href="#download">Download</a></p>
            <p><a className='trove-links' href="#blog">Library</a></p>
          </div>
          <div className="trove__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;