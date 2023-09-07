import React from 'react'
import './skills.css'

const Skills = () => {
  return (
    <section id='skills'>
      <div name='about' className='w-full '>
        <div className='flex flex-col justify-center items-center text-4xl font-bold'>
          <p>
            Who I am
          </p>
          <div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 text-center p-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 px-1'>
                <img className='w-20 mx-auto' src={process.env.PUBLIC_URL + '/assets/html.png'} alt="HTML icon" />
                <div style={{ fontSize: "20px" }}>
                  <p className='symbol' >HTML</p></div>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={process.env.PUBLIC_URL + '/assets/css.png'} alt="HTML icon" />
                <div style={{ fontSize: "20px" }}>
                  <p className='symbol' >CSS</p></div>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={process.env.PUBLIC_URL + '/assets/javascript.png'} alt="HTML icon" />
                <div style={{ fontSize: "20px" }}>
                  <p className='symbol' >JAVASCRIPT</p></div>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={process.env.PUBLIC_URL + '/assets/typescript.png'} alt="HTML icon" />
                <div style={{ fontSize: "20px" }}>
                  <p className='symbol' >TYPESCRIPT</p></div>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={process.env.PUBLIC_URL + '/assets/react.png'} alt="HTML icon" />
                <div style={{ fontSize: "20px" }}>
                  <p className='symbol' >REACT</p></div>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={process.env.PUBLIC_URL + '/assets/angular.png'} alt="HTML icon" />
                <div style={{ fontSize: "20px" }}>
                  <p className='symbol' >ANGULAR</p></div>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={process.env.PUBLIC_URL + '/assets/github.png'} alt="HTML icon" />
                <div style={{ fontSize: "20px" }}>
                  <p className='symbol' >GITHUB</p></div>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={process.env.PUBLIC_URL + '/assets/node.png'} alt="HTML icon" />
                <div style={{ fontSize: "20px" }}>
                  <p className='symbol' >NODE JS</p></div>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={process.env.PUBLIC_URL + '/assets/sql.png'} alt="HTML icon" />
                <div style={{ fontSize: "20px" }}>
                  <p className='symbol' >SQL</p></div>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={process.env.PUBLIC_URL + '/assets/tailwind.png'} alt="HTML icon" />
                <div style={{ fontSize: "20px" }}>
                  <p className='symbol' >TAILWIND</p></div>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={process.env.PUBLIC_URL + '/assets/firebase.png'} alt="HTML icon" />
                <div style={{ fontSize: "20px" }}>
                  <p className='symbol'>FIREBASE</p></div>
              </div>
            </div>
          </div>
          <div className=' text-justify text-base '>
            <div className='listPadding'>
              <ul className="list-disc text-sm">
                <li>Skilled in customer coordination for successful business operations and implementing service standards for excellence.</li>
                <li>Specialize in creating interactive and user-friendly websites,admin panels and web applications.</li>
                <li>Enable seamless data exchange and app functionality via API requests.</li>
                <li>Skilled  in version control using Git and CI/CD pipelines.</li>
              </ul>

              <div className='text-3xl font-bold py-8'>
                <p className='education'>Education</p>
              </div>

              <div className='skillBars'>
                <div className='skillBar'>
                  <img src={process.env.PUBLIC_URL + '/assets/college.jpg'} alt='' className="skillBarImg" />
                  <div className='skillBarText'>
                    <h2>SNPIT & RC , UMRAKH</h2>
                    <p><b>Bachelor of Computer Science Enggineering</b></p>
                    <p>August 2016 - September 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Skills