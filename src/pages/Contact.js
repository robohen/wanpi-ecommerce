import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from "../components/Meta";
import {AiOutlineHome, AiOutlineMail} from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle} from "react-icons/bi";
import Container from '../components/Container';

const Contact = () => {
  return (
    <>
    <Meta title={"Contact Us"}/>
    <BreadCrumb title="Contact Us"/>
    <Container class1='contact-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13416.36701836485!2d130.7414779!3d32.7898263!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3540f3c6d11f9813%3A0x3587755c30a64fa5!2sKumamoto%20Prefectural%20Government%20Office!5e0!3m2!1sen!2sus!4v1678672920825!5m2!1sen!2sus" 
          width="600" 
          height="450" 
          className='border-0 w-100' 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title='Googs'
          ></iframe>
          </div>
          <div className='col-12 mt-5'>
            <div className='contact-inner-wrapper d-flex justify-content-between'>
              <div className=''>
                <h3 className='contact-title mb-4'>Contact</h3>
                <form action='' className='d-flex flex-column gap-15'>
                  <div>
                  <input type="text" className='form-control' placeholder='Name'/>
                  </div>
                  <div>
                  <input type="email" className='form-control'placeholder='Email'/>
                  </div>
                  <div>
                  <input type="tel" className='form-control' placeholder='Phone Number'/>
                  </div>
                  <div>
                    <textarea 
                    name=""
                    id=""
                    className='w-100 form-control'
                    cols="30"
                    row="10"
                    placeholder='Comments'
                    />
                  </div>
                  <div>
                    <button className='button border-0'>Summit
                    </button>
                  </div>
                </form>
              </div>
              <div className=''>
                <h3 className='contact-title'>Get in touch with us</h3>
                <div>
                  <ul className='ps-0'>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                    <AiOutlineHome className='fs-5'/>
                    <address>Kumamoto Prefectural Offices, Suizenji 6 chome 18-1 Chuo-ku, Kumamoto 862-8570</address>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                    <BiPhoneCall className='fs-5'/>
                    <a href='tel:19517969737'>+1 9517969737</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                    <AiOutlineMail className='fs-5'/>
                    <a href='maito:gutierrezhenry95@gmail.com'>MugiwaraRUs@gmail.com</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                    <BiInfoCircle className='fs-5'/>
                    <p className='mb-0'>Monday - Friday 10 AM - 8 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Container>
    </>
  )
}

export default Contact;