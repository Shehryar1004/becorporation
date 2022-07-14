import {MdKeyboardArrowRight} from 'react-icons/md'
import './style.css'

const Relations = () => {
    return(
        <div className='relation_container container'>
            <div className='relation_cards-container'>
                <div className='relation_card'>
                    <div>
                        <p>Sustainability</p>
                        <h2>Standards</h2>
                        <a>Read More <MdKeyboardArrowRight /></a>
                    </div>
                </div>
                <div className='relation_card'>
                    <div>
                        <p>London Exchange</p>
                        <h2>Exchange</h2>
                        <a>
                            <div>
                                <p>Read More</p>
                                <MdKeyboardArrowRight />
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className='relation_content-container'>
                <h2>BeCorporation's <span>Investor Relations</span></h2>
                <h4>Lorem epsum gratisus suseis thomasi eidonsaa eidolon hudrlgyss thermal corruption and bag a mon</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <a>Read More</a>
            </div>
        </div>
    )
}

export default Relations