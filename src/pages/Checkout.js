import React from 'react';
import {Link} from 'react-router-dom';
import {BiArrowBack} from "react-icons/bi";
import choppa1 from "../images/choppa-pop01.jpg";
import Container from "../components/Container";
const Checkout = () => {
  return (
    <>
    <Container class1='checkout-wrapper py-5 home-wrapper-2'>
        
            <div className='row'>
                <div className='col-7'>
                    <div className='checkout-left-data'>
                        <h3 className='website-name'>MugiWaraRUS</h3>
                        <nav style={{"--bs-breadcrumb-divider": ">" }} aria-label="breadcrumb">
                            <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link className='text-dark total-price' to="/cart">Cart</Link></li>
                            &nbsp; /
                            <li className="breadcrumb-item active" aria-current="page">Imformation</li>
                            &nbsp; /<li className="breadcrumb-item active">Shipping</li>
                            &nbsp; / 
                            <li className="breadcrumb-item active total-price" aria-current="page">Payment</li>
                        </ol>
                        </nav>
                        <h4 className='title total'>Contact Information</h4>
                        <p className='user-details total'>
                            MugiWaraRUS@Strawhat.com(Monkey D. Luffy)
                            </p>
                            <h4 className='mb-3'>Shipping Address</h4>
                        <form
                            action=''
                            className='d-flex gap-15 justify-content-between flex-wrap'
                        >
                            <div className='w-100'>
                                <select
                                name=''
                                className='form-control form-select'
                                id=""
                                >
                                    <option value="" selected disabled>Select Country</option>
                                </select>
                            </div>
                            <div className='flex-grow-1'>
                                <input
                                placeholder='First Name' 
                                type="text"
                                className='form-control'
                                />
                            </div>
                            <div className='flex-grow-1'>
                                <input 
                                placeholder='Last Name'
                                type="text"
                                className='form-control'
                                />
                            </div>
                            <div className='w-100'>
                                <input
                                type="text"
                                className='form-control'
                                placeholder='Address'
                                />
                            </div>
                            <div className='w-100'>
                                <input
                                placeholder='Apartment, Suite, etc.'
                                type="text"
                                className='form-control'
                                />
                            </div>
                            <div className='flex-grow-1'>
                                <input
                                placeholder='City'
                                type="text"
                                className='form-control'
                                /></div>
                            <div className='flex-grow-1'>
                                <select
                                name='text'
                                className='form-control form-select'
                                id="state"
                                placeholder='State'
                                >
                                    <option 
                                    value="option"
                                    select disabled
                                    >
                                        Select State
                                    </option>
                                </select>
                            </div>
                            <div className='flex-grow-1'>
                                <input
                                type="text"
                                className='form-control'
                                placeholder='Zipcode'
                                />
                                </div>
                                <div
                                className='w-100'
                                >
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <Link 
                                        to="/cart"
                                        className='text-dark'
                                        >
                                        <BiArrowBack className='me-2'/>    
                                        Return to Cart</Link>
                                        <Link 
                                        to="/shipping"
                                        className="button"
                                        >Continue to Shipping</Link>
                                    </div>
                                </div>
                        </form>
                    </div>
                </div>
                <div className='col-5'>
                    <div className='border-bottom py-4'>
                        <div className='d-flex gap-10 mb-2 align-align-items-center'>
                        <div className='w-75 d-flex gap-10'>
                            <div className='w-25 position-relative'>
                                <span style={{"top":"-10px", right: "2px"}} className='badge bg-secondary text-white rounded-circle p-2 position-absolute'>
                                    1
                                    </span>
                                <img src={choppa1} alt="product" className='img-fluid'/></div>
                        </div>
                        <div>
                            <h5 className='title total'>Chopper </h5>
                            <p className='total-price'>One Piece: Wano Series</p>
                        </div>
                        <div className='flex-grow-1'>
                            <h5 className='total'>$100</h5>
                        </div>
                        </div>
                    </div>
                    <div className='border-bottom py-4'>
                    <div className='d-flex justify-content-between align-items-center '>
                        <p className='total'>Subtotal</p>
                        <p className='total-price'>$999999</p>
                    </div>
                    </div>
                    
                    <div >
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='mb-0 total'>Shipping</p>
                        <p className='mb-0 total-price'>$0</p>
                    </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                        <h4 className='total'>Total</h4>
                        <h5 className='total-price'>$999999</h5>
                    </div>
                </div>
            </div>
    </Container>
    </>
  );
};

export default Checkout;