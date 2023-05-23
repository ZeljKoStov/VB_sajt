import React, { useState,useEffect  } from 'react';
import { MenuItems } from '../menuitems';
import { NavLink } from 'react-router-dom';
import {easeInOut, motion} from 'framer-motion'
import './NavbarStyles.css';


const Navbar = () => {

  const [clicked,setClicked]= useState(false)
  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState(true);
  

  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        setShow(false); 
      } else { // if scroll up show the navbar
        setShow(true);  
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    } //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);
 
  const handleClick=()=>{
    setClicked(!clicked)
  }

  return (
    <motion.nav className={show?"NavbarItems":"NavbarItemsHidden"}
      initial={{
        opacity:0
      }}
      animate={{
        opacity:1
      }}
      transition={{
        delay:4.2,
        duration:0.3,
        easings:easeInOut
      }}
    >
        <NavLink to='/' className='navbar-logo'>Vlasinska Borovnica</NavLink>

        <div className='menu-icons' onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item,index)=>{
            return(
              <>
                <li >
                  <NavLink key={item.title} className={item.cNmae} to={item.url}><i key={index} className={item.icon}></i>{item.title}</NavLink>
                </li>
              </>
            ) 
          })}
        </ul>
    </motion.nav>
  )
}

export default Navbar
