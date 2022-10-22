import React from 'react'
import './Scale.css'
import ScaleText from '../../assets/enterprise.png'
import ScaleImage from '../../assets/scaleImg.png'
import GettinStartedBtn from '../../assets/Get Started.png'
const Scale = () => {
  return (
  <section className='Scale' id='scale'>
 <div className="scale_heading">
    <span>Scale your business with Enterprise Suite.</span>
 </div>
 <div className="scaleMain">

        
    <div className="scaleImg">
    <img src={ScaleText} className='scaleTxt'  />
       <img src={ScaleImage}  alt="" />
    </div>
     
     
    <div className="scale__mainText">
     <span>
      
     <span> As a Registered company or enterprise in Nigeria, you can
sign up in Creedlance as a company, 
how is this beneficial to your firm?
</span>





 <ul>
    <li> 

    Get exposure to more people and enterprise who will need
      your service or products

    </li>
    <li>
    Acquire services or work done for cheaper than you normally
      would.

    </li>
    <li>
    Stand out from other Creedlancers as a registered business
    </li>
 </ul>
</span>
<div className="skillbtn">
<button>Get Started</button>
</div>

</div>
</div>

  </section>
  )
}

export default Scale