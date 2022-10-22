import React, { useState } from 'react'
import './Footer.css'
import {BsTwitter,BsFacebook,BsInstagram,BsYoutube,BsLinkedin} from 'react-icons/bs'
import {IoIosArrowDropdownCircle} from 'react-icons/io'
const FooterDropDown=({name,informations})=>{
  const [isActive,SetiSActive]=useState(false)
  const [selected,setSelected]=useState("")
  const selection=['For Clients','Resource','For Talent','Company  ']
  const firstoptions=['React','Vue','Angular']
  return(
    <div className="footerdropDown">
      <div className="footer_btn" onClick={e => SetiSActive(!isActive)}>{name}
      <span> <IoIosArrowDropdownCircle /> </span>
      </div>
   
      {isActive &&( <div className="footerdropdown-content">
        {informations.map((option)=>(
          <div onClick={e => setSelected(option)} className='footerdropDown-item'><p><a href="#"></a>{option}</p></div>
        ))}
      </div>)}
     
    </div>
  )
}
const Footer = () => {
  const clients=['How to Hire','Talent Marketplace','Project Catalog','Talent Scout','Enterprise','Payroll Services','Direct Contracts','Hire in Nigeria']
  const Resource=['Help & Support','Success Stories','Reviews','Resource','Blog','Community','Affiliate Program','Free Business tools']
  const Talent=['How to Find Work','Direct Contacts','Find Freelnace Jobs In Nigeria'];
  const Comapeny=['About us','Leadership','Investor Relations','Careers','Our Impact','Press','Contact Us','Trsut,Safety & Security','Modern Slavery Statement']
  return (
    <div className="footer">
      <FooterDropDown name={'For Clients'} informations={clients} />
      <FooterDropDown name={'Resource'} informations={Resource} />
      <FooterDropDown name={'For Talent'} informations={Talent} />
      <FooterDropDown name={'Company'} informations={Comapeny} />
       <div className="content">
        <div className="forClients">
        <h4>For Clients</h4>

        <p><a href="#"></a>How to Hire</p>
        <p><a href="#"></a>Talent Marketplace</p>
        <p><a href="#"></a>Project Catalog</p>
        <p><a href="#"></a>Talent Scout</p>
        <p><a href="#"></a>Enterprise</p>
        <p><a href=""></a>Payroll Services</p>
        <p><a href="#"></a>Direct Contracts</p>
        <p><a href="#"></a>Hire in Nigeria</p>
        </div>
        <div className="Resource">
            <h4>Resource</h4>
        <p><a href="#"></a>Help & Support</p>
        <p><a href="#"></a>Success Stories</p>
        <p><a href="#"></a>Reviews</p>
        <p><a href="#"></a>Resource</p>
        <p><a href="#"></a>Blog</p>
        <p><a href="#"></a>Community</p>
        <p><a href="#"></a>Affiliate Program</p>
        <p><a href="#"></a>Free Business tools</p>
        </div>
       <div className="forTalent">
        <h4>For Talent</h4>
        <p><a href="#"></a>How to Find Work</p>
        <p><a href="#"></a>Direct Contacts</p>
        <p><a href="#"></a>Find Freelnace Jobs In Nigeria</p>
       </div>
       <div className="company">
        <h4>Company</h4>
        <p><a href="#"></a>About us</p>
        <p><a href="#"></a>Leadership</p>
        <p><a href="#"></a>Investor Relations</p>
        <p><a href="#"></a>Careers</p>
        <p><a href="#"></a>Our Impact</p>
        <p><a href="#"></a>Press</p>
        <p><a href="#"></a>Contact Us</p>
        <p><a href="#"></a>Trsut,Safety & Security</p>
        <p><a href="#"></a>Modern Slavery Statement</p>
       </div>
       </div>
       
       <footer>
        <span>Follow us</span>
        <div className="footer_icons">
            <BsInstagram />
            <BsTwitter />
            <BsFacebook />
            <BsYoutube />
            <BsLinkedin />
        </div>
       </footer>
       <hr className='footer_line' />
       <div className="below_footer">
        <span>© 2022 CreedLance® Global Inc.</span>
        <span>Terms of Service </span>
        <span>Privacy Policy</span>
        <span>CA Notice at Collection</span>
        <span> Cookie Settings</span>
        <span>Accessibility</span>
       </div>
      
    </div>
  )
}

export default Footer