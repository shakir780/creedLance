import React, { useState } from 'react'
import Logo from '../../assets/Logo1.png'
import { Link } from 'react-scroll'
import './Header.css'
const Header = () => {
  const[active,SetActive]=useState("nav__menu")
  const [icon,setIcon]=useState("nav__toggler")

    const navToggle=()=>{
      if(active === 'nav__menu'){
        SetActive("nav__menu nav__active")
      }
      else SetActive("nav__menu")

      //icon toggler
      if(icon === 'nav__toggler'){
        setIcon("nav__toggler toggle")
      }
      else setIcon("nav__toggler")
      
      
    }
  return (
    <nav className='nav'>
        <a href="#" className='nav__brand'>
        <img className='logo' src={Logo} alt='logo'/> 
        </a>
        <ul className={active}>
          <li className="nav__item">
            <Link onClick={()=>{
              SetActive('nav__menu')
              setIcon("nav__toggler")
            }} to='BrowseJobs' spy={true} smooth={true}>
              <a href="" className='nav__link'>Browse jobs</a>

            </Link>
          </li>
          <li className="nav__item">
            <Link onClick={()=>{
              SetActive('nav__menu')
              setIcon("nav__toggler")
            }} to='Browse Service' spy={true} smooth={true}>
              <a href="" className='nav__link'>Browse Service</a>

            </Link>
          </li>
          <li className="nav__item">
            <Link onClick={()=>{
              SetActive('nav__menu')
              setIcon("nav__toggler")
            }} to='Enterprise' spy={true} smooth={true}>
              <a href="" className='nav__link'>Enterprise</a>

            </Link>
          </li>
        <div className="navbar-login">
    <a href="/" className="p__opensans">Contact us</a>
<a href="/" className="p__opensans">About</a>
    <div />
    <a href="#login" className='p__opensans'>Log In  </a>
  <button className='btn nav-btn'>Post a Job</button>

</div>
        </ul>

<div onClick={navToggle} className={icon}>
  <div className='line1'></div>
  <div className='line2'></div>
  <div className='line3'></div>
</div>
      

    </nav>
  )
}

export default Header