import React from 'react'
import WorkImg from '../../assets/WorkImg.png'
import WorkBtn from '../../assets/WorkBtn.png'
import check from '../../assets/check.png'
import './Work.css'
const Work = () => {
  return (
 <section className='Work' id='work'>
   <div className="work_heading">
    <span>Getting work done has never been <span>EASIER</span> </span>
 </div>

 <div className="work__Main">
  <div className="work_text">
<span>
  <ul>
  <li>
    <img className='check' src={check} /> Get matched with expert creelancers in minutes
</li>
    <li> 
    <img className='check' src={check} /> Dedicated 24/7 customer service team

    </li>
    <li>
    <img className='check' src={check} /> Anti-fraud measures and protection
    </li>
    <div className='work_btn'>
 <img className='check' src={WorkBtn} alt="" />
 </div>
  </ul>
</span>
  </div>
  <div className="work__Img">
 <img className='check' src={WorkImg} />
  </div>
 </div>

 </section>
       
       
      
  )
}

export default Work