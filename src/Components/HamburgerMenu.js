import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

// IMAGES
import facebook_icon from '../img/facebook-icon.png';
import instagram_icon from '../img/instagram-icon.png';

export class Hamburgermenu extends React.Component {
  render() {
    return (
      <Menu right width={'250px'}>
        <Link className='menu-item' to='/'>
          Home
        </Link>
        <Link className='menu-item' to='/about'>
          About
        </Link>
        <hr></hr>
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
      </Menu>
    );
  }
}

export default Hamburgermenu;
