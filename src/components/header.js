import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from '../images/logo-designcode.svg'
import './Header.css'

const Header = ({ siteTitle }) => (
  <header>
  <div className='Header'>
      <div className='HeaderGroup'>
         <Link to='/'><img src={logo} width='30'/></Link>
          <Link to='/Courses'>Courses</Link>
          <Link to='/Downloads'>Downloads</Link>
          <Link to='/WorkShops'>WorkShops</Link>
          <Link to='/Buy'><button>Buy</button></Link>
      </div>
  </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
