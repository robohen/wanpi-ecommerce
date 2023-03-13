import React from 'react'
import ReactStars from "react-rating-stars-component";
import {Link, useLocation} from 'react-router-dom';
import prodcompare from "../images/images/prodcompare.svg";
import wish from "../images/images/wish.svg";
import wishlist from "../images/images/wishlist.svg";
import choppa1 from "../images/choppa-pop01.jpg";
import choppa2 from "../images/choppa-pop02.jpg";
import addcart from "../images/images/add-cart.svg";
import view from "../images/images/view.svg";
const ProductCard = (props) => {
    let location = useLocation();
    const {grid} = props;
  return (
    <>
    <div className={` ${
        location.pathname === "/product" ? `gr-${grid}` : "col-3"
        } `}
        >
        <Link to={`${
            location.pathname == '/' 
            ?  "/product/:id" 
            :location.pathname == "/product/:id"
            ?"/product/1" : 
            ":id"}`} className='product-card position-relative'>
            <div className='wishlist-icon position-absolute'>
                <button className='border-0 bg-transparent'>
                <img src={wish} alt="wishlist"/>
                </button>
            </div>
            <div className='product-image'>
                <img src={choppa2} className='img-fluid' alt='product'/>
                <img src={choppa1} className='img-fluid' alt='product'/>
                </div>
                <div className="product-details">
                <h6 className='brand'>Funko Pop</h6>
                <h5 className='product-title'>
                    Tony Tony Chopper Wano Series
                </h5>
                <ReactStars
                    count={5}
                    value={4}
                    size={24}
                    edit={false}
                    activeColor="#ffd700"
                />
                <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                Tony Tony Chopper, also known as "Cotton Candy Lover" Chopper,[6] is the doctor of the Straw Hat Pirates and one of the Senior Officers of the Straw Hat Grand Fleet.[2] He is the sixth member of the crew and the fifth to join, doing so at the end of the Drum Island Arc. He was temporarily forced to join the Foxy Pirates during the Long Ring Long Land Arc, but was quickly returned to Luffy's crew.
                    </p>
                <p className='price'>$ 100.00</p>
                </div>
                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column gap-15'>
                        <button className='bg-transparent border-0'>
                        <img src={prodcompare} alt="compare"/>
                        </button>
                        <button className='bg-transparent border-0'>
                        <img src={view} alt="view"/>
                        </button>
                        <button className='bg-transparent border-0'>
                        <img src={addcart} alt="addcart"/>
                        </button>
                    </div>
                </div>
            
        </Link>
    </div>
    <div className={` ${
        location.pathname == "/product" ? `gr-${grid}` : "col-3"
        } `}
        >
        <Link 
        to={`${
            location.pathname == '/' 
            ?  "/product/:id" 
            :location.pathname == "/product/:id"
            ?"/product/1" : 
            ":id"}`}
        className='product-card position-relative'>
            <div className='wishlist-icon position-absolute'>
                <Link>
                <img src={wish} alt="wishlist"/>
                </Link>
            </div>
            <div className='product-image'>
                <img src={choppa2} className='img-fluid' alt='product'/>
                <img src={choppa1} className='img-fluid' alt='product'/>
                </div>
                <div className="product-details">
                <h6 className='brand'>Funko Pop</h6>
                <h5 className='product-title'>
                Tony Tony Chopper Wano Series
                </h5>
                <ReactStars
                    count={5}
                    value={4}
                    size={24}
                    edit={false}
                    activeColor="#ffd700"
                />
                <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>Tony Tony Chopper, also known as "Cotton Candy Lover" Chopper,[6] is the doctor of the Straw Hat Pirates and one of the Senior Officers of the Straw Hat Grand Fleet.[2] He is the sixth member of the crew and the fifth to join, doing so at the end of the Drum Island Arc. He was temporarily forced to join the Foxy Pirates during the Long Ring Long Land Arc, but was quickly returned to Luffy's crew.</p>
                <p className='price'>$100.00</p>
                </div>
                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column gap-15'>
                        <Link>
                        <img src={prodcompare} alt="compare"/>
                        </Link>
                        <Link>
                        <img src={view} alt="view"/>
                        </Link>
                        <Link>
                        <img src={addcart} alt="addcart"/>
                        </Link>
                    </div>
                </div>
            
        </Link>
    </div>
    </>
  )
}

export default ProductCard;