import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom'

function Header() {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark  " >
  <div className="container-fluid  " >
    <img  className="navbar-brand" src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png" style={{width:"180px"}} alt="No Img" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-link p-2" to="/" >Home</NavLink>
      <NavLink className="nav-link p-2" to="/tvshows" >TV Shows</NavLink>
      <NavLink  className="nav-link p-2" to="/movies">Movies</NavLink>
      </div>
    </div>
  </div>
</nav>
  

</>
    
    
    
  )
}

export default Header;

