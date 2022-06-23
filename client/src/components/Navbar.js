import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {

  let navigate=useNavigate();

    let location=useLocation().pathname;
    console.log(location);

    let className_events="nav-link mx-3 cursor-pointer";
    let className_host_event="nav-link mx-3 cursor-pointer";
    let className_login="nav-link mx-3 cursor-pointer";

    if(location==="/login" || location==="/signup"){
      if(location==="/login"){
        document.title="Login | EventXpress";
      }
      else if(location==="/signup"){
        document.title="Signup | EventXpress";
      }
      className_login+="  text-decoration-underline";
    }
    else if(location==="/events"){
      document.title="Events | EventXpress";
      className_events+=" text-decoration-underline";
    }
    else if(location==="/host_event"){
      document.title="Host Event | EventXpress";
      className_host_event+=" text-decoration-underline";
    }

  return (
    <>
    <nav className="navbar d-flex justify-content-between flex-wrap mb-3" style={{background:"#595dcff2"}}>
  
    <Link  to="/" className="navbar-brand text-white mx-3">EventXpress</Link>
    <div className='d-flex justify-content-around text-white'>
      <div className={className_events}><Link className='text-white text-decoration-none'  to="/events" >Events</Link></div>
      <div className={className_host_event}><Link className='text-white text-decoration-none'  to="/host_event" >Host event</Link></div>

      {
      localStorage.getItem("user")?
      <div className={className_login+" text-white text-decoration-none"} style={{cursor:"pointer"}} onClick={()=>{localStorage.removeItem("user"); navigate("/");}}>Logout</div>
      :
      <div className={className_login}><Link className='text-white text-decoration-none'  to="/login" >Login/Signup</Link></div>
  }
      
  </div>
</nav>
    </>
  )
}

export default Navbar