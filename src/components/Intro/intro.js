import React from 'react'
import './intro.css'
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
        <div className='introContent' >
          <span className='hello'>Hello,</span>
          <span className='introText'> I'm <span className='introName'>Heli</span> <br />Website Developer</span>
          <p className='introPara'>Experienced web developer skilled in building responsive<br /> and dynamic websites, dedicated to delivering user-centric digital solutions</p>
          <Link><button className='btn'><img src={process.env.PUBLIC_URL + '/assets/hireme.png'} alt="hireme" className='btnImg' />Hire Me</button></Link>
        </div>
        <img src={process.env.PUBLIC_URL + '/assets/profile.png'} alt='profile' className='bg' />
        </div></div></div>
    </section>

  )
}

export default Intro