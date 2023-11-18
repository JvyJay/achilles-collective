import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// COMPONENTS
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

// PHOTOS
import logo from '../img/Transparent-Logo.svg';
import facebook_icon from '../img/facebook-icon.png';
import instagram_icon from '../img/instagram-icon.png';

function Navy() {
  return (
    <>
      <Router>
        <Navbar
          className='p-5 flex flex-row justify-content-center align-items-center align-self-center text-center'
          expand='lg'
        >
          <Container>
            <Navbar.Brand>
              <img
                alt='Brand'
                src={logo}
                width='150'
                className='d-inline-block align-top img-fluid'
              />{' '}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav>
                <Nav.Link>
                  <Link
                    class='text-dark'
                    style={{ textDecoration: 'none' }}
                    to='/'
                  >
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    class='text-dark'
                    style={{ textDecoration: 'none' }}
                    to='/about'
                  >
                    About
                  </Link>
                </Nav.Link>
                <Nav.Link
                  href='https://www.facebook.com/groups/5437920596330257'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img width='15' alt='facebook' src={facebook_icon} />
                </Nav.Link>
                <Nav.Link
                  href='https://www.instagram.com/achillescollective/?next=%2F'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img width='15' alt='instagram' src={instagram_icon} />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* MIDDLE SECTION CONTENT */}
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/about' element={<About />}></Route>
        </Routes>

        {/* FOOTER SECTION */}
        <footer className='text-center d-flex justify-content-center p-5'>
          <p className='text-white'>Achilles Collective &#169; 2022</p>
          {/* <div className='rightSide'>
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
                  <img
                    style={{ textDecoration: 'none' }}
                    alt='facebook'
                    src={facebook_invert}
                  />
                </a>
                <a
                  href='https://www.instagram.com/achillescollective/?next=%2F'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    style={{ textDecoration: 'none' }}
                    alt='instagram'
                    src={instagram_invert}
                  />
                </a>
              </div>
            </div>
          </div> */}
        </footer>
      </Router>
    </>
  );
}

export default Navy;
