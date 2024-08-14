import React from 'react'
import { Link ,useNavigate } from 'react-router-dom'
import Logo from'./foodies.png';

function Nav() {
  const navigate= useNavigate();
  const handelLogout=()=>{
    localStorage.removeItem("authtoken");
    navigate("/login")
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success ">
    <div className="container-fluid">
      <Link className="navbar-brand fs-3" to="#"><img width="65px" src={Logo}  alt='bhh'/><b>btech cars</b></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 me-auto mb-2">
          <li className="nav-item">
            <Link className="nav-link active fs-1" aria-current="page" to="/">Home</Link>
          </li>
          {(localStorage.getItem("authtoken"))?
          <li className="nav-item">
          <Link className="nav-link active fs-1" aria-current="page" to="/">Myorders</Link>
        </li>
        :""}
        </ul>
        {(!localStorage.getItem("authtoken"))? 
         <div>
         
            <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
        
          
          <Link className="btn bg-white text-success mx-1" to="/Signup">Sign Up </Link>
      
         </div>
:<div>  
   <div className='btn bg-white text-success mx-2 fs-1'>
  
  cart</div>
<div className='btn bg-white text-danger mx-2 fs-1' onClick={handelLogout}>
  
logout</div>
</div>}
      </div>
    </div>
  </nav>
  )
}

export default Nav