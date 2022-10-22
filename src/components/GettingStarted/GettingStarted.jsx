import React from 'react'
import './GettingStarted.css'
import { GettingStartedData } from '../../data/GettingSStartedData'
import Help from '../../assets/Help.png'
const GettingStarted = () => {
  return (
    <section className='GettingStarted' id='gettingStarted'>
     <div className='gettingText'>
        <span>Getting Started?</span>

     </div>
     <div className="getting-categories">
        {GettingStartedData.map((getting)=>(
            <div key={getting.id} className='gettingCat'>
                <div className='getting_img'>
                <img src={getting.image} alt="getting" /> 
                </div>
              
               <div className='getting_text'>
                  
                <span>{getting.Header}</span>
                <span>{getting.subheader}</span>
               </div>
            </div>
        ))}
     </div>
     
     <div className="help">
        <div className="help_heading">

<span>We're here to help</span>
</div>
<div className='help_main'>

<div className="help-subText">
<span>Our skilled recruiters can assist you
in locating the best freelancer for
the job, and our technical co-pilots
can even manage the project for you.</span>
</div>
      
       
        <div className="helpImage">
  <img src={Help} alt="" />
        </div>
        </div>
     </div>

    </section>
  )
}

export default GettingStarted