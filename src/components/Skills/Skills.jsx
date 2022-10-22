import React from 'react'
import './Skills.css'
import Clients from '../../assets/clients.png'
import SkillsLogo from '../../assets/SkillsLogo.png'
const Skills = () => {
  return(
    <section className='Skills' id='skills'>
        <div className="skills_heading">
    <span>Discover skills your own way.</span>
 </div>
 <div className="skills_main">
    <div className="skillsImg">
        <img src={Clients} />
        <img src={SkillsLogo} alt="" />
    </div>
    
    <div className="skills_mainText">
        <span>Work with Nigeria's largest network of independent
 professionals to complete tasks ranging from
 quick turnarounds to large-scale transformations.</span>
    </div>
 </div>
    </section>
  )
  
}

export default Skills