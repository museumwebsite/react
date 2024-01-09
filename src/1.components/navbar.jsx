import React ,{useState} from 'react';
import "../navbar.css";

function Navbar() {
    const [active, setActive] = useState('nav_menu');
    const [ToggleIcon, setToggleIcon] = useState("nav_toggler");
    const navToggle = () => {
        active === 'nav_menu'
         ? setActive('nav_menu nav_active')
         :setActive("nav_menu");

         //togglerIcon
         ToggleIcon === 'nav_toggler' 
         ? setToggleIcon('nav_toggler toggle')
         : setToggleIcon('nav_toggler');
    }
  return (
    <nav className='nav'>
        <a href="#" className='nav_brand'></a>
        <ul className={active}>
            <li className='nav_item'><a href="#" className='nav_link'><font size="4">Home</font></a>
            <div class="sub-nav">
                    <ul>
                        <li><a href="#"><font size="3">About Us</font></a></li>
                        <li><a href="#"><font size="3">Volunter</font></a></li>
                        <li><a href="#"><font size="3">Donate</font></a></li>
                        <li><a href="#"><font size="3">Visit Plan</font></a></li>
                    </ul>
                </div>
                </li>
            <li className='nav_item'><a href="#" className='nav_link'><font size="4">Contact</font></a>
            <div class="sub-nav">
                    <ul>
                        <li><a href="#"><font size="3">+91 9876543210</font></a></li>
                        <li><a href="#"><font size="3">museum@gmail.com</font></a></li>
                        <li><a href="#"><font size="3">museum.insta@345</font></a></li>
                    </ul>
                </div>
                </li>
            <li className='nav_item'><a href="#" className='nav_link'><font size="4">Login</font></a></li>
            <li className='nav_item'><a href="#" className='nav_link'><font size="4">ExhibitionsandEvents</font></a>
            <div class="sub-nav-1">
                    <ul>
                        <li><a href="#"><font size="3">Exhibitions</font></a></li>
                        <li><a href="#"><font size="3">Events and Tour</font></a></li>
                        <li><a href="#"><font size="3">performances</font></a></li>
                    </ul>
                </div>
                </li>
            <li className='nav_item'><a href="https://maps.google.co.in" className='nav_link'><font size="4">Navigate</font></a></li>
            <li className='nav_item'><a href="#" className='nav_link'><font size="4">Buy tickets</font></a></li>
          
        </ul>
        <div onClick = {navToggle} className={ToggleIcon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
    </nav>


  )
}

export default Navbar;
