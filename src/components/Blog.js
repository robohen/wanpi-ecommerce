import React from 'react';
import {Link} from 'react-router-dom';
import firstissue from '../images/firstIssue.jpg';
const Blog = () => {
  return (
            <div className='blog-card'>
                <div className='card-image'>
                <img src={firstissue}  className="img-fluid w-100" alt='blog'/>
                </div>
                <div className='blog-content'>
                    <p className='date'>1 Dec, 2022</p>
                    <h5 className='title'>A beautiful Sunday Morning Renaissance</h5>
                        <p className='desc'>Description goes here After learning this, Luffy and Sanji head for the mountain with Nami in tow, only to be attacked by dozens of Lapahns, giant ferocious rabbits.[6] A fight ensues, and its ferocity causes an avalanche. Sanji is injured, so Luffy must climb up the mountain while carrying both Nami and Sanji.[7] When he reaches the top, both his hands and feet are severely damaged. He collapses in front of Dr. Kureha and her assistant, Tony Tony Chopper</p>
                        <Link to="/blogs/:id" className='button'>
                          Read More
                          </Link>
                </div>
            </div>
  );
};

export default Blog;