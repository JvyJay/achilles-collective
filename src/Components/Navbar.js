import React from 'react';

// COMPONENTS
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Hamburgermenu from './HamburgerMenu';
import Home from './Home';
import About from './About';

// PHOTOS
import logo from '../img/Transparent-Logo.svg';
import logo_invert from '../img/logo-invert.jpg';
import facebook_icon from '../img/facebook-icon.png';
import instagram_icon from '../img/instagram-icon.png';
import facebook_invert from '../img/facebook-invert.png';
import instagram_invert from '../img/instagram-invert.png';

const Navbar = () => {
  return (
    <div>
      <Router>
        {/* NAVBAR/ROUTER */}
        <div className='navbar'>
          {/* LOGO AREA */}
          <div className='left'>
            <img src={logo} alt='Achilles Collective Logo'></img>
          </div>
          {/* NAVIGATION/HAMBURGER MENU*/}
          <Hamburgermenu />
          <div className='right'>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
            </ul>
            <p>|</p>
            <div className='social-icons-sections'>
              <div className='social-icons'>
                <a
                  href='https://www.facebook.com/groups/5437920596330257'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img alt='facebook' src={facebook_icon} />
                </a>
                <a
                  href='https://www.instagram.com/achillescollective/?next=%2F'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img alt='instagram' src={instagram_icon} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* MIDDLE SECTION CONTENT */}
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/about' element={<About />}></Route>
        </Routes>
        {/* FOOTER SECTION */}
        <footer>
          <div className='leftSide'>
            <img src={logo_invert} alt='Achilles Collective Footer Logo'></img>
            <p>Achilles Collective &#169; 2022</p>
          </div>
          <div className='rightSide'>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
            </ul>
            <p>|</p>
            <div className='social-icons-sections'>
              <div className='social-icons'>
                <a
                  href='https://www.facebook.com/groups/5437920596330257'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img alt='facebook' src={facebook_invert} />
                </a>
                <a
                  href='https://www.instagram.com/achillescollective/?next=%2F'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img alt='instagram' src={instagram_invert} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </Router>
    </div>
  );
};

export default Navbar;
