import React, { useState } from 'react';
import './navbar.css'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [showMenu,setShowMenu] =  useState(false)
  return (
    <nav className="navbar">
      <p><b><i style={{fontFamily:"initial"}}>Heli Patel</i></b></p>
      <div className='desktopMenu'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Experience</Link>
        {/* <Link className='desktopMenuListItem'>Portfolio</Link> */}
      </div>
      <button className='desktopMenuBtn' onClick={() => {
        document.getElementById('contact').scrollIntoView({behavior:'smooth'});
      }}>
        <img src={process.env.PUBLIC_URL + '/assets/contact.png'} alt="Contact" className="desktopMenuImg" /> Contact Me
      </button>
      <img src={process.env.PUBLIC_URL + '/assets/menu.png'} alt='Menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
      <div className='navMenu' style={{display : showMenu ? 'flex' :'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(!showMenu)}>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(!showMenu)}>Experience</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(!showMenu)}>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar