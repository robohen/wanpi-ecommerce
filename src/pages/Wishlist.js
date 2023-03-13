import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container';
import boundman from "../images/gear4.jpg";
import sword from "../images/luffysword.jpg";
import warota from '../images/nikawarota.jpg';
const Wishlist = () => {
  return (
    <>
    <Meta title={"Wishlist"}/>
    <BreadCrumb title="Wishlist"/>
    <Container class1='wishlist-wrapper home-wrapper-2 py-5'>
            <div className='row'>
                <div className='col-3'>
                    <div className='wishlist-card position-relative'>
                    <img 
                        src="./images/images/cross.svg"
                        alt="cross"
                        className='position-absolute cross img-fluid'
                        />
                        <div className='wishlist-card-image'>
                            <img className="img-fluid w-100" src={boundman} alt='product'/>
                        </div>
                        <div className='py-3 px-3'>
                        <h5 className='title'>HONOR T1 7.0 GB RAM 7 INCH WITH Wi-FI +3g Tablet</h5>
                        <h6 className='price'>$ 100</h6>
                        </div>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='wishlist-card position-relative'>
                    <img 
                        src="./images/images/cross.svg"
                        alt="cross"
                        className='position-absolute cross img-fluid'
                        />
                        <div className='wishlist-card-image'>
                            <img className="img-fluid w-100" src={sword} alt='product'/>
                        </div>
                        <div className='py-3 px-3'>
                        <h5 className='title'>HONOR T1 7.0 GB RAM 7 INCH WITH Wi-FI +3g Tablet</h5>
                        <h6 className='price'>$ 100</h6>
                        </div>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='wishlist-card position-relative'>
                    <img 
                        src="./images/images/cross.svg"
                        alt="cross"
                        className='position-absolute cross img-fluid'
                        />
                        <div className='wishlist-card-image'>
                            <img className="img-fluid w-100" src={warota} alt='product'/>
                        </div>
                        <div className='py-3 px-3'>
                        <h5 className='title'>HONOR T1 7.0 GB RAM 7 INCH WITH Wi-FI +3g Tablet</h5>
                        <h6 className='price'>$ 100</h6>
                        </div>
                    </div>
                </div>
            </div>
    </Container>
    </>
  );
};

export default Wishlist;