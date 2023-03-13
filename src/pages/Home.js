import React from 'react';
import {Link} from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import Blog from '../components/Blog';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import Container from '../components/Container';
import {services} from '../utilities/Data';
import { mServices } from '../utilities/mData';
import Vol1 from "../images/OnePieceVol1.jpg"; 
import Vol61 from "../images/OnePieceVol61.jpg";
import gear5 from "../images/gear5shirt.jpg";
import brook from "../images/brook-shirt.jpg";
import luffytochoppa from "../images/luffy-to-choppa.jpg";
import chocoshanks from "../images/shanks-choco.jpg";
import chopperp from "../images/chopper-plush.webp";
import buggy from "../images/buggy.jpg";
import ad from "../images/opRed.jpg";
import bigmom from "../images/bigmom.jpg";
import sanji from "../images/sanji.jpg";
import df from '../images/DF-banner.jpg';

const Home = () => {
  
  return (
    <>
    <Container class1="home-wrapper-1 py-5">
    <div className='row'>
          <div className='col-6'>  
            <div className='main-banner position-relative mt-1'>
              <img 
              className="img-fluid rounded-3" 
              src={ad}
              alt="main banner"
              />
              <div className='main-banner-content position-absolute'>
                <h4 className='text-dark'>SUPERCHARGED FOR PIRATES</h4>
                <h5>One Piece Red Tickets</h5>
                <p>From $999.00 or 41.62/mo.</p>
                <Link className='button'>BUY NOW</Link>
                </div>
                </div>
              </div>
              <div className='col-6'>
            <div className='d-flex flex-wrap gap-10 justify-content-between  align-items-center'>
            <div className='small-banner position-relative'>
              <img 
              className="img-fluid rounded-3" 
              src={bigmom} 
              alt="small banner"
              />
              <div className='small-banner-content position-absolute'>
              <h4 className=' fw-bold'>NEW ARRIVAL</h4>
                <h5 className='text-light'>Challenge Big Mom <br/> to an eating competition.</h5>
                <h4 className='text-dark fw-bold'>
                  From $999.00 <br/>or 41.62/mo.
                </h4>
                </div>
              </div>
        
        <div className='small-banner position-relative'>
              <img 
              className="img-fluid rounded-3" 
              src={sanji} 
              alt="small banner"
              />
              <div className='small-banner-content position-absolute'>
                <h4>NEW ARRIVAL</h4>
                <h5 className='text-light'>Cooking lessons by Sanji </h5>
                <p className='text-light fw-bold'>From $999.00 <br/>or 41.62/mo.</p>
                </div>
              </div>
              <div className='small-banner position-relative'>
              <img 
              className="img-fluid rounded-3" 
              src={df} 
              alt="small banner"
              />
              <div className='small-banner-content position-absolute'>
                <h4>NEW ARRIVAL</h4>
                <h5>One Piece Devil Fruits </h5>
                <p className='fw-bold'>From $999.00 <br/>or 41.62/mo.</p>
                </div>
              </div>
              <div className='small-banner position-relative '>
              <img 
              className="img-fluid rounded-3" 
              src={df} 
              alt="small banner"
              />
              <div className='small-banner-content position-absolute'>
                <h4>NEW ARRIVAL</h4>
                <h5>One Piece Devil Fruits </h5>
                <p  className='fw-bold'>From $999.00<br/> or 41.62/mo.</p>
                </div>
              </div>
              </div>
          </div>
        
      </div>
    </Container>
    <Container class1="home-wrapper-2 py-5">
          <div className='row'>
            <div className='col-12'>
              <div className='services d-flex align-items-center justify-content-between'>
                {
                  services?.map((i, j) =>{
                    return(
                        <div className='d-flex align-items-center gap-15' key={j}>
                          <img src={i.image} alt="services"/>
                          <div>
                            <h6>{i.title}</h6>
                            <p className='mb-0'>{i.tagline}</p>
                          </div>
                        </div>

                    )
                  })
                }
              </div>
            </div>
          </div>
    </Container>
    <Container  class1="home-wrapper-2 py-5">
    <div className='row'>
          <div className='col-12'>
            <div className='categories d-flex flex-wrap justify-content-between align-items-center'>
                  <div className='d-flex gap align-items-center'>
                    <div>
                  <h6>Manga</h6>
                  <p>10 Items</p>
                  </div>
                  <img src={Vol1} alt='manga' className="img-fluid"/>
                  </div>
                  <div className='d-flex gap align-items-center'>
                    <div>
                  <h6>Clothes</h6>
                  <p>10 Items</p>
                  </div>
                  <img src={gear5} alt='clothes' className='img-fluid w-50'/>
                  </div>
                  <div className='d-flex gap align-items-center'>
                    <div>
                  <h6>Figures</h6>
                  <p>10 Items</p>
                  </div>
                  <img src={luffytochoppa} alt='figure' className='img-fluid w-50'/>
                  </div>
                  
                  <div className='d-flex gap align-items-center'>
                    <div>
                  <h6>Plushies</h6>
                  <p>10 Items</p>
                  </div>
                  <img src={chopperp} alt="plushie" className='img-fluid w-50'/>
                  </div>
                  <div className='d-flex gap align-items-center'>
                    <div>
                  <h6>Manga</h6>
                  <p>10 Items</p>
                  </div>
                  <img src={Vol61} alt='Vol61'/>
                  </div>
                  <div className='d-flex gap align-items-center'>
                    <div>
                  <h6>Clothes</h6>
                  <p>10 Items</p>
                  </div>
                  <img src={brook} alt='brookshirt' className='img-fluid w-50'/>
                  </div>
                  <div className='d-flex gap align-items-center'>
                    <div>
                  <h6>Figures</h6>
                  <p>10 Items</p>
                  </div>
                  <img src={chocoshanks} alt='figure' className='img-fluid w-50'/>
                  </div>
                  <div className='d-flex gap align-items-center'>
                    <div>
                  <h6>Plushies</h6>
                  <p>10 Items</p>
                  </div>
                  <img src={buggy} alt='plushie' className='img-fluid w-50'/>
                  </div>
                  
                  
              </div>
              
            
          </div>
        </div>
    </Container>
    <Container class1="featured-wrapper home-wrapper-2 py-5">
    <div className='row'>
          <div className="col-12">
            <h3 className='section-heading'>Featured Collection</h3>
          </div>
          <ProductCard to="/:id"/>
          <ProductCard to="/:id"/>
          <ProductCard to="/:id"/>
          <ProductCard to="/:id"/>
        </div>
    </Container>
    <Container class1="famous-wrapper py-5 home-wrapper-2">
    <div className='row'>
          <div className='col-3'>
            <div className="famous-card position-relative">
              <img src='./images/thunder-gear5.jpg' alt='statue' className='img-fluid'/>
              <div className='famous-content position-absolute'>
                <h5>One Piece Char</h5>
              <h6>Wano island series</h6>
              <p>From $399 or $16.62/mo. for 24mo.</p>
              </div>
              
              <p></p>
            </div>
          </div>
          <div className='col-3'>
            <div className="famous-card position-relative">
              <img src='./images/thunder-gear5.jpg' alt='statue' className='img-fluid'/>
              <div className='famous-content position-absolute'>
                <h5>One Piece Char</h5>
              <h6 >Wano island series</h6>
              <p>From $399 or $16.62/mo. for 24mo.</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className="famous-card position-relative">
              <img src='./images/thunder-gear5.jpg' alt='statue' className='img-fluid'/>
              <div className='famous-content position-absolute'>
                <h5>One Piece Char</h5>
              <h6 >Wano island series</h6>
              <p>From $399 or $16.62/mo. for 24mo.</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className="famous-card position-relative">
              <img src='./images/thunder-gear5.jpg' alt='statue' className='img-fluid'/>
              <div className='famous-content position-absolute'>
                <h5>One Piece Char</h5>
              <h6 >Wano island series</h6>
              <p>From $399 or $16.62/mo. for 24mo.</p>
              </div>
            </div>
          </div>
        </div>
    </Container>
    <Container class1='special-wrapper py-5 home-wrapper-2'>
        <div className='row'>
        <div className="col-12">
            <h3 className='section-heading'>Special Products</h3>
          </div>
        </div>
        <div className='row'>
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      
    </Container>
    <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div></div>
        <div className='row'>
          <div className="col-12">
            <h3 className='section-heading'>Our Popular Products</h3>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
    </Container>
    <Container class1='marque-wrapper py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='marquee-inner-wrapper card-wrapper'>
              <Marquee className='d-flex'>
              {
              mServices?.map((a, b) =>{
              return(
              <div
                className = "mx-4 w-25"
                key={b}
                >
              <img src = {a.image}
              alt = "brand" />
              
              </div>
              )
              })
              
              }
              </Marquee>
            </div>
          </div>
        </div>
    </Container>
    <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className='row'>
          <div className="col-12">
            <h3 className='section-heading'>Our Latest Blogs</h3>
          </div>
          
        </div>
        <div className='row'>
          <div className='col-3'>
            <Blog />
          </div>
          <div className='col-3'>
            <Blog />
          </div>
          <div className='col-3'>
            <Blog />
          </div>
          <div className='col-3'>
            <Blog />
          </div>
        </div>
    </Container>
    </>
  )
}

export default Home;