import React from 'react'
import ReactStars from 'react-rating-stars-component';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from '../components/ProductCard';
import { useState } from 'react';
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import {TbGitCompare} from "react-icons/tb";
import {AiOutlineHeart} from "react-icons/ai";
import Container from '../components/Container';
const SingleProduct = () => {
    const props = {
      width: 800,
      height: 600, 
      zoomWidth: 600,

      img: "https://wallpaperaccess.com/full/17350.jpg"
    };
    const [orderedProduct, setOrderedProduct] =useState(true);
    const copyToClipboard = (text) =>{
      console.log("text", text);
      var textField = document.createElement("textarea");
      textField.innerText = text;
      document.body.appendChild(textField);
      textField.select();
      document.execCommand("copy");
    }
  return (
    <>
    <Meta title={"Product Name"}/>
    <BreadCrumb title="Product Name"/>
    <Container class1='main-product-wrapper py-5 home-wrapper-2'>
            <div className='row'>
                <div className='col-6'>
                  <div className='main-product-image'>
                    <div>
                      <ReactImageZoom {...props} />
                    </div>
                  </div>
                  <div className='other-product-images d-flex flex-wrap gap-15'>
                    <div><img src="https://bbts1.azureedge.net/images/p/full/2021/12/7e8fc359-bc4d-4d45-9c65-15c31e6d239c.jpg" alt='item' className='img-fluid' /></div>
                    <div><img src="https://bbts1.azureedge.net/images/p/full/2021/12/7e8fc359-bc4d-4d45-9c65-15c31e6d239c.jpg" alt='item' className='img-fluid' /></div>
                    <div><img src="https://bbts1.azureedge.net/images/p/full/2021/12/7e8fc359-bc4d-4d45-9c65-15c31e6d239c.jpg" alt='item' className='img-fluid' /></div>
                    <div><img src="https://bbts1.azureedge.net/images/p/full/2021/12/7e8fc359-bc4d-4d45-9c65-15c31e6d239c.jpg" alt='item' className='img-fluid' /></div>
                  </div>
                </div>
                <div className='col-6'>
                  <Container class1='main-product-details'>
                    <div className='border-bottom'><h3 className='title'>Black Beard statue
                      </h3>
                      </div>
                      <div className='border-bottom py-3'>
                        <p className='price'>$ 700</p>
                        <div className='d-flex align-items-center gap-10'>
                        <ReactStars
                                count={5}
                                value={4}
                                size={24}
                                edit={false}
                                activeColor="#ffd700"
                            />
                            <p className='mb-0 t-review'>( 2 Reviews )</p>
                        </div>
                        <a className='review-btn' href='#review'>Write a Review</a>
                      </div>
                      <div className='py-3'>
                        <div className='d-flex gap-10 align-items-center my-2'>
                          <h3 className='product-heading'>Type:</h3><p className='product-data'>Limited Poster</p>
                          </div>
                        <div className='d-flex gap-10 align-items-center my-2'>
                          <h3 className='product-heading'>Brand :</h3><p className='product-data'>One Piece</p>
                          </div>
                        <div className='d-flex gap-10 align-items-center my-2'>
                          <h3 className='product-heading'>Category :</h3><p className='product-data'>Posters</p>
                          </div>
                        <div className='d-flex gap-10 align-items-center my-2'>
                          <h3 className='product-heading'>Tags :</h3><p className='product-data'>Straw Hat Crew</p>
                          </div>
                          <div className='d-flex gap-10 align-items-center my-2'>
                          <h3 className='product-heading'>Availability :</h3><p className='product-data'>In Stock</p>
                          </div>
                          <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                          <h3 className='product-heading'>Size :</h3><div className='d-flex flex-wrap gap-15'>
                            <span className='badge border border-1 bg-white text-dark'>S</span>
                            <span className='badge  border border-1 bg-white text-dark'>M</span>
                            <span className='badge border border-1 bg-white text-dark'>L</span>
                            <span className='badge border border-1 bg-white text-dark'>XL</span>
                          </div>
                          </div>
                          <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                          <h3 className='product-heading'>Color :</h3>
                            <Color />
                          </div>
                          <div className='d-flex align-items-center gap-15 flex-row mt-2 mb-3'>
                          <h3 className='product-heading'>Quantity :</h3>
                          <div>
                            <input 
                            type="number"
                            name=""
                            min={1}
                            max={10}
                            id=""
                            style={{width: "50px"}}
                            className="form-control"
                            />
                          </div>
                          <div className='d-flex align-items-center gap-30 ms-5'>
                          <button className='button border-0' type='submit'>Buy It Now</button>
                                    <button className="button signup">Add to Cart</button>
                          </div>
                          </div>
                          <div className="d-flex align0items-center gap-15">
                            <div>
                              <a href="#"> 
                              <TbGitCompare className='fs-5 me-2'/>Add to Compare</a>
                            </div>
                            <div>
                              <a href='#'>
                                <AiOutlineHeart className='fs-5 me-2'/>Add to Wishlist</a>
                            </div>
                          </div>
                          <div className='d-flex gap-10 flex-column my-3'>
                          <h3 className='product-heading'>Shipping & Returns</h3>
                          <p className='product-data'>Free shipping and returns available on all orders! <br/>{" "} We ship all US domestic orders within {" "}
                          <b>5-10 business days!</b>
                          </p>
                          </div>
                          <div className='d-flex gap-10 align-items-center my-3'>
                          <h3 className='product-heading'>Product Link:</h3>
                          <a href="javascript:void(0)" onClick={()=>{copyToClipboard("https://wallpaperaccess.com/full/17350.jpg"); }}>
                            Copy Product Link
                          </a>
                          </div>
                      </div>
                  </Container>
                </div>
            </div>
        
    </Container>
    <Container class1='description-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                <h4>Description</h4>
                    <div className='bg-white p-3'>
                    
                    <p>Despite some tensions between both groups, Luffy reluctantly agrees to free Lucci and Kaku, allowing them to engage the Seraphim. Meanwhile, 
                    Vegapunk is placed in confinement in the lab, 
                    surprised at the events occurring under his nose and wonders how the World Government found out about his Poneglyph research. 
                    Elsewhere on Elbaf, the Red Hair Pirates after saying hello to the reunited Giant Warrior Pirates confronts 
                    the Kid Pirates and demands their copies of the Road Poneglyph by challenging them to a battle for them.
                    </p>
                    </div>
                </div>
            </div>
            </div>
    </Container>
    <Container class1='reviews-wrapper home-wrapper-2'>
            <div className='row'>
                <div className='col-12'>
                    <h4 id= "review">Reviews</h4>
                    <div className='review-inner-wrapper'>
                    <div className='review-head d-flex justify-content-between align-items-end'>
                        <div>
                            <h4 className='mb-2'>Customer Reviews</h4>
                            <div className='d-flex align-items-center gap-10'>
                                <ReactStars 
                                count={5}
                                value={4}
                                size={24}
                                edit={false}
                                activeColor="#ffd700"
                            />
                            <p className='mb-0'>Based on 2 Reviews</p>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div className='review-form py-4'>
                    <h4 className='mb-2'>Write a Review</h4>
                    <form action='' className='d-flex flex-column gap-15'>
                        <div>
                        <ReactStars
                                count={5}
                                value={4}
                                size={24}
                                edit={true}
                                activeColor="#ffd700"
                            />
                        </div>
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
                  <div className='d-flex justify-content-end'>
                    <button className='button border-0'>Summit Review
                    </button>
                  </div>
                </form>
                    </div>
                    <div className='reviews'>
                        <div className='review'>
                            <div className='d-flex align-items-center gap-10'>
                                <h6 className='mb-0'>Navdeep</h6>
                        <ReactStars
                                count={5}
                                value={4}
                                size={24}
                                edit={false}
                                activeColor="#ffd700"
                            />
                            </div>
                            <p className='mt-3'>Despite some tensions between both groups, Luffy reluctantly agrees to free Lucci and Kaku, allowing them to engage the Seraphim. Meanwhile, 
                    Vegapunk is placed in confinement in the lab, 
                    surprised at the events occurring under his nose and wonders how the World Government found out about his Poneglyph research. 
                    Elsewhere on Elbaf, the Red Hair Pirates after saying hello to the reunited Giant Warrior Pirates confronts 
                    the Kid Pirates and demands their copies of the Road Poneglyph by challenging them to a battle for them.
                    </p>
                        </div>
                    </div>
                    </div>

                </div>
                {orderedProduct && (
                <div>
                <a className='text-dark text-decoration-underline' 
                href=".review">
                    Write a Review
                </a>
                </div>)}
            </div>
    </Container>
    <Container class1="popular-wrapper py-5 home-wrapper-2">

        <div className='row'>
          <div className="col-12">
            <h3 className='section-heading'>Our Popular Products</h3>
          </div>
          <div className="row">
            <div className='col-2'>
              <div className='card'></div>
            </div>
            <div className='col-2'>
              <div className='card'></div>
            </div>
            <ProductCard />
          </div>
        </div>
    </Container>
    </>
  );
};

export default SingleProduct;