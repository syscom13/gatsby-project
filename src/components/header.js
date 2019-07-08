import React from 'react'
import Link from 'gatsby-link'
// import logo from '../images/logo-designcode.svg'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={require('../images/logo-designcode.svg')} width="30"/></Link>
      <Link to="/">Courses</Link>
      <Link to="/">Downloads</Link>
      <Link to="/">Workshops</Link>
      <Link to="/">Sign In</Link>
      <Link to="/"><button>Buy</button></Link>
    </div>
  </div>
)

export default Header
