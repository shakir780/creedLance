import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import HomeText from '../../assets/Hire the best workers for any job, in Nigeria..png'
import HomeSubText from '../../assets/work multiple jobs with Nigeria’s number 1 freelancing site.png'
const Hero = () => {
  return (
    <>
    <section className='hero' id='home'>
        <Header />
        <div className="hero-text">
         
         <div><span>Hire the best</span></div>
         <div><span>Workers for any job,</span></div>
         <div><span>in Nigeria</span></div>

         <div className="hero-subtext">
           <span>work multiple jobs with Nigeria’s number 1 freelancing site</span>
          </div>
          
        </div>
       
          <div className="herobuttons">
           <button className=' btn hero-btn1'>Work & Earn Money</button>
           <button className=' btn hero-btn2'>Hire a Worker</button>
          </div>
          <div className="hero_bottomText">
            <span> We Offer The Most Specific Of JOBS...</span>
          </div>
    </section>
    </>
  )
}

export default Hero