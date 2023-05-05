import React, { useEffect } from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import Logo from '../../assets/brand/Logo.png';
import './footer.css';
import { Link, useLocation } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { HiLocationMarker } from 'react-icons/hi'
import LuckyLinez from '../../assets/brand/luckyzlinez.png'


const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top of the page on route change
  }, [location.pathname]);

  return (
    <footer className='footer'>
      <div className='footer-left'>
        <img src={Logo}></img>

      </div>
      <div className='footer-middle'>
        <div className='footer-map'>
          <img src={LuckyLinez}></img>
          <p>
            <Link style={{ textDecoration: 'none' }} to='/'>
              HOME
            </Link>
          </p>
          <p>
            <Link style={{ textDecoration: 'none' }} to='/portfolio'>
              PORTFOLIO
            </Link>
          </p>
          <p>
            <Link style={{ textDecoration: 'none' }} to='/contact'>
              CONTACT
            </Link>
          </p>
          <p>
            <Link style={{ textDecoration: 'none' }} to='/aftercare'>
              AFTERCARE
            </Link>
          </p>
        </div>
        <div className='footer-social-media'>
          <a href='https://www.instagram.com/luckyzlinez/' style={{ textDecoration: 'none' }}>< AiOutlineInstagram /></a>
          <a href='https://www.facebook.com/Luckyzlinez' style={{ textDecoration: 'none' }}><FaFacebook /></a>
        </div>
      </div>
      <div className='footer-right'>
        <div className='right-individual'>
          <span>< HiLocationMarker /></span>
          <div id='right-column'>
            <p>2005 Portage Ave</p>
            <p>Winnipeg, Manitoba</p>
            <p>R3J 0K3</p>
          </div>
        </div>

        <div className='right-individual'>
          <span><AiOutlineMail /></span>
          <p>tattoosbyluciano@outlook.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
