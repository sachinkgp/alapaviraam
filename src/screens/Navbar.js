import './screencss/Navbar.css'
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';

function Navbar(){
    const [isMobile, setIsMobile] = useState(false);
      useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // set breakpoint as desired
    };

    window.addEventListener('resize', handleResize);
    // Set initial value
    handleResize();

    // Clean up listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    const navigate = useNavigate();
    var [toggle,settoggle] = useState(true);
    const handletoggle = ()=>{
        settoggle(toggle=!toggle)
    }
    const handletoggle1 = ()=>{
        settoggle(toggle=!toggle)
        navigate('/services')
    }
    const handletoggle2 = ()=>{
        settoggle(toggle=!toggle)
        navigate('/ourteam')
    }
    const handletoggle3 = ()=>{
        settoggle(toggle=!toggle)
        navigate('/aboutus')
    }
    const handletoggle4 = ()=>{
        settoggle(toggle=!toggle)
        navigate('/contactus')
    }
    const gotohome = ()=>{
        navigate('/home')
    }
    return(
    <div className='fullnav'> 
        <div className='navbar'>
            <div className='' onClick={()=>gotohome()}>
                <img className="logo" src='whitelogo.png' alt="Logo"></img>
            </div>
        
            {isMobile ? (
        // Elements to show on mobile
            <button className="navbutton btn2" onClick={()=>handletoggle()}>
                {toggle? <i class="fa-solid fa-bars" style={{color: 'black'}}></i>:<i class="fa-solid fa-xmark" style={{color:'black'}}></i>}
            </button>
      ) : (
        // Elements to show on larger screens
        <ul className="desknavbar">
            <li><a href="/services">Services</a></li>
            <li><a href="/ourteam">Our Team</a></li>
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/contactus">Contact US</a></li>
        </ul>
      )}
            
        
        </div>
        <div className='sidelist'>
            <ul className={toggle? 'hide':'showsidemenu'}>
                <li><button className='navbtn navbtnstyle' onClick={()=>handletoggle1()}><a>Services</a></button></li>
                <li><button className='navbtn navbtnstyle' onClick={()=>handletoggle2()}><a>Our Team</a></button></li>
                <li><button className='navbtn navbtnstyle' onClick={()=>handletoggle3()}><a>About Us</a></button></li>
                <li><button className='navbtn navbtnstyle' onClick={()=>handletoggle4()}><a>Contact US</a></button></li>
            </ul>
        </div>
        
    </div>
    )
}

export default Navbar;