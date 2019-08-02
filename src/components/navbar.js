import React from 'react';
import { Link } from 'react-router-dom'

function Navbar(props) {
  return (
    <nav className="black">
      <div className="nav-wrapper container">
      	<Link to="/" className="brand-logo">React App</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
	        <li><Link className="btn-nav" to="/">Users</Link></li>
	        <li><Link className="btn-nav" to="/posts">Posts</Link></li>
	      </ul>
      </div>
    </nav>
  )
}

export default Navbar;