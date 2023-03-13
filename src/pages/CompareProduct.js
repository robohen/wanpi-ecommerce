import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from "../components/Meta";
import Color from '../components/Color';
import Container from '../components/Container';
import gear4 from '../images/gear4.jpg';

const CompareProduct = () => {
  return (
    <>
    <Meta title={"Compare Products"}/>
    <BreadCrumb title="Compare Products"/>

    <Container class1='compare-product-wrapper py-5 home-wrapper-2'>
            <div className='row'>
                <div className='col-3'>
                    <div className='compare-product-card position-relative'>
                        <img 
                        src="./images/images/cross.svg"
                        alt="cross"
                        className='position-absolute cross img-fluid'
                        />
                        <div className='product-card-image'>
                        <img 
                            src={gear4} 
                            alt="watch"
                            className='img-fluid'
                        />
                        </div>
                        <div className='compare-product-details'>
                            <h5 className='title'>Gear 4 Bound Man Luffy</h5>
                            <h6 className='price mb-3 mt-3'>$ 100</h6>
                            <div>
                                <div className='product-detail'>
                                    <h5 className=''>Brand:</h5>
                                    <p>One Piece</p>
                                </div>
                                <div className='product-detail'>
                                    <h5 className=''>Type:</h5>
                                    <p>Figure</p>
                                </div>
                                <div className='product-detail'>
                                    <h5 className=''>Availability:</h5>
                                    <p>Yes</p>
                                </div>
                                <div className='product-detail'>
                                    <h5 className=''>Color:</h5>
                                    <Color/>
                                </div>
                                <div className='product-detail'>
                                    <div className='d-flex gap-10'>
                                    <h5>Size:</h5>
                                    <p></p>
                                    <p>One Size</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='compare-product-card position-relative'>
                        <img 
                        src="./images/images/cross.svg"
                        alt="cross"
                        className='position-absolute cross img-fluid'
                        />
                        <div className='product-card-image'>
                        <img 
                            src={gear4}
                            alt="watch"
                            className='img-fluid'
                        />
                        </div>
                        <div className='compare-product-details'>
                            <h5 className='title'>Gear 4 Bound Man Luffy</h5>
                            <h6 className='price mb-3 mt-3'>$ 100</h6>
                            <div>
                                <div className='product-detail'>
                                    <h5 className=''>Brand:</h5>
                                    <p>One Piece</p>
                                </div>
                                <div className='product-detail'>
                                    <h5 className=''>Type:</h5>
                                    <p>Figure</p>
                                </div>
                                <div className='product-detail'>
                                    <h5 className=''>Availability:</h5>
                                    <p>Yes</p>
                                </div>
                                <div className='product-detail'>
                                    <h5 className=''>Color:</h5>
                                    <Color/>
                                </div>
                                <div className='product-detail'>
                                    <div className='d-flex gap-10'>
                                    <h5>Size:</h5>
                                    <p></p>
                                    <p>One Size</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </Container >
    </>
  );
};

export default CompareProduct;