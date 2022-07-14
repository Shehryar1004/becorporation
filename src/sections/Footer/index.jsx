import logo from '../../assets/logo.png'
import {AiOutlineMail, AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF, FaLinkedin} from 'react-icons/fa'
import './style.css'

const Footer = () => {
    return(
        <div className='footer_container container'>
            <div className='footer_img'></div>
            <div className='footer_topPart'>
                <div className='footer_address-container'>
                    <div className='footer_logo-container'>
                        <img src={logo}/>
                        <h2>BeCorporation</h2>
                    </div>

                    <div className='footer_address'>
                        <p>Level 12, 2 Elizabath St,</p>
                        <p>Melbourne, Victoria 3000,</p>
                        <p>Australia</p>
                    </div>

                    <div className='footer_email'>
                        <AiOutlineMail />
                        <p>noreply@envato.com</p>
                    </div>
                </div>

                <div className='footer_headline-container'>
                    <h2>Strategy of <span>BeCorporation Group</span> for 2020-2023</h2>
                    <a>Read More</a>
                </div>
            </div>
            <div className='footer_bottomPart'>
                <p>&#169; 2022 Betheme by Muffin Group | All Rights Reserved | Powered by Wordpress</p>
                <div className='footer_socialMedia-container'>
                    <FaFacebookF />
                    <AiOutlineTwitter />
                    <FaLinkedin />
                </div>
            </div>
        </div>
    )
}

export default Footer