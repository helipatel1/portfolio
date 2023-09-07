import React from 'react'
import './contact.css'

const Contact = () => {
    return (
        <section id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <div className='contactDesc'>DISCUSS A JOB OPPORTUNITY OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL<br />
                <span>9106959873</span><br />
                <span>heli171998@gmail.com</span>
            </div>
            <div className='links'>
                <img src={process.env.PUBLIC_URL + '/assets/linkedIn.png'} alt='LinkedIn' className='link' />
                <img src={process.env.PUBLIC_URL + '/assets/gmail.png'} alt='Gmail' className='link' />
            </div>
        </section>
    )
}

export default Contact