import {useState} from 'react'
import './style.css'
import {HiMenuAlt1, HiMenu} from 'react-icons/hi'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navbarClass = isOpen ? 'navbar_menu-container open' : 'navbar_menu-container';

    return(
        <div className='navbar'>
        <div className='navbar_container'>
            <div className='navbar_logo-container'>
                <h2>BeCorporation</h2>
            </div>

            <div className='navbar_links-container'>
                <ul>
                    <li><a href='#hero'>Home</a></li>
                    <li><a href='#balance'>Balance</a></li>
                    <li><a href='#howItWorks'>How It Works</a></li>
                    <li><a href='#business'>Business</a></li>
                    <li><a href='#model'>Model</a></li>
                </ul>
            </div>

            <div className='navbar_button-container' onClick={() => setIsOpen(prevState => !prevState)}>
                { isOpen 
                ? <HiMenuAlt1 className='navbar_button-icon'/>
                : <HiMenu className='navbar_button-icon'/>
                }
            </div>

            <div className={navbarClass}>
                <ul>
                    <li><a href='#hero' onClick={() => setIsOpen(false)}>Home</a></li>
                    <li><a href='#balance' onClick={() => setIsOpen(false)}>Balance</a></li>
                    <li><a href='#howItWorks' onClick={() => setIsOpen(false)}>How It Works</a></li>
                    <li><a href='#business' onClick={() => setIsOpen(false)}>Business</a></li>
                    <li><a href='#model' onClick={() => setIsOpen(false)}>Model</a></li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Navbar