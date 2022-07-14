import React from 'react'
import {BsHandbag} from 'react-icons/bs'
import './style.css'

const Hero = () => {
    return(
        <div className='hero_container'>
            <div className='container'>
                <h2>Increase Your <br />
                    <span>income.</span>
                </h2>
                <p className='hero_description-text'>Lorem epsum dolor sit amet, consectur Lorem epsum dolor sit amet, consectur Lorem epsum dolor sit amet, consectur</p>
                <button className='hero_cta-button'>
                    Read More
                </button>

                <div className='hero_fixed-container'>
                    <div className='hero_fixed-info'>
                        <p><strong>650+</strong> Websites</p>
                    </div>
                    <div className='hero_fixed-cta'>
                        <a href='#buyNow'> 
                            <center><BsHandbag size={24}/></center>
                            <p>Buy Now</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero