import react, {useState} from 'react'
import {BsBriefcase} from 'react-icons/bs'
import business1 from '../../assets/business_1.png'
import business2 from '../../assets/business_2.png'
import './style.css'

const Business = () => {
    return(
        <div className='business_container container'>
            <div className='business_image-container'>
                <img src={business1}/>
            </div>
            <div className='business_content-container'>
                <BsBriefcase className='business_icon'/>
                <h2>Business</h2>
                <p>Lorem epsum gracia senonym baag wa sang no metric tecnolo waris sinaomiya shirogane</p>
                <a>Read More</a>
            </div>
        </div>
    )
}

export default Business