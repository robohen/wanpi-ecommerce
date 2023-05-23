import React from 'react'
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub,BsInstagram,BsYoutube } from 'react-icons/bs';
import newsletter from "../images/images/newsletter.png";
const Footer = () => {
  return (
    <>
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row align-items-center'>
          <div className='col-5'>
            <div className='footer-top-data d-flex gap-30 align-items-center'>
              <img src={newsletter} alt='newsletter'/>
              <h2 className='mb-0 text-white'>Sign up for the Strawhat Newsletter</h2>
            </div>
          </div>
          <div className='col-7'>
          <div class="input-group">
            <input 
            type="text" 
            className="form-control py-2" 
            placeholder="Email goes here..." 
            aria-label="Email goes here..." 
            aria-describedby="basic-addon2"
            />
            <span class="input-group-text p-3" id="basic-addon2">
            Subscribe
            </span>
          </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-4'>
            <h4 className='text-white mb-4'>Contact Us</h4>
            <div>
              <address className='text-white fs-6'>Foosha Village, <br/>Zip Code 111111111<br/> Finding the One Piece 
              </address>
              <a href='tel: 123456789' className='mt-4 d-block mb-3 text-white'>+1 123456789</a>
              <a href='mail to:gutierrezhenry95@gmail.com' 
              className='mt-2 d-block mb-0 text-white'
              >
                mugiwaraRus@Onepiece.com
                </a>
                <div className='social_icons d-flex align-items-center gap-30 mt-4'>
                    <a className='text-white' href="/">
                    <BsLinkedin className='text-white fs-4' /></a>
                    <a className='text-white' href="/">
                    <BsInstagram className='text-white fs-4' /></a>
                    <a className='text-white' href="/">
                    <BsGithub className='text-white fs-4' /></a>
                    <a className='text-white' href="/">
                    <BsYoutube className='text-white fs-4' /></a>
                </div>
              </div>
              </div>
          <div className='col-3'>
            <h4 className='text-white mb-4'>Information</h4>
            <div className='footer-links d-flex flex-column'>
              <Link to="/privacy-policy" className='text-white py-2 mb-1'>Privacy Policy</Link>
              <Link to="/refund-policy" className='text-white py-2 mb-1'>Refund Policy</Link>
              <Link to="/shipping-policy" className='text-white py-2 mb-1'>Shipping Policy</Link>
              <Link to="/terms-conditions" className='text-white py-2 mb-1'>Terms & Conditions</Link>
              <Link to="/blogs" className='text-white py-2 mb-1'>Blogs</Link>
              </div></div>
          <div className='col-3'>
            <h4 className='text-white mb-4'>Account</h4><div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>My Account</Link>
              <Link className='text-white py-2 mb-1'>Switch Accounts</Link>
              <Link className='text-white py-2 mb-1'>Account Settings</Link>
              <Link className='text-white py-2 mb-1'>Log out</Link>
              </div></div>
          <div className='col-2'>
            <h4 className='text-white mb-4'>Quick links</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Browsing History</Link>
              <Link className='text-white py-2 mb-1'>What's Hot</Link>
              <Link className='text-white py-2 mb-1'>Random Product</Link>
              <Link className='text-white py-2 mb-1'>New Products</Link>
              </div>
              </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
    <div className='row'>
      <div className='col-12'>
        <p className='text-center mb-0 text-white'>
          &copy;{new Date().getFullYear()} Powered by the Straw Hats
          </p>
      </div>
    </div>
    </footer>
    </>
  )
};

export default Footer;