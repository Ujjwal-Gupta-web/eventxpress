import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  document.title=`Home | EventXpress`;
  let wind_height=window.innerWidth;
  

  return (
    <>
      <div className='d-flex flex-wrap container align-items-center justify-content-between mb-3'>
        <div className='fw-bold fs-6'>
          See upcoming events , participate in events and host events
        </div>
        <img className='rounded' src="/images/home_1.webp" height={"400px"} style={{ minWidth: "300px" }} />
      </div>


      <div className='my-3 w-100' style={{ background: "#595dcff2" }}>
        <div className='container p-3'>
          <div className='text-white text-center'>
            You can list your event on our platfrom to reach a wider audience.
            We have thousands of people visiting this site and getting to know about events.
            <br />
            <Link to="/host_event" className='btn my-4 mb-3 text-center' style={{ background: "#fb7263" }}>Organize event</Link>
          </div>
        </div>
      </div>

      <div className='text-center container'>
      {(wind_height<=500)? 
      <img className='rounded' src="/images/home_3.jpg" height={"400px"} style={{width:"300px"}} />
      :
      <img className='rounded' src="/images/home_3.jpg" height={"400px"}/>
      }
        
      </div>



      <div className='my-3 w-100' style={{ background: "#fb7263" }}>
        <div className='container p-3'>
          <div className=' text-center'>
            We have thousands of people visiting this site and getting to know about events.
            Go ahead be a part of them.
            <br />
            <Link to="/events" className='btn my-4 mb-3 text-center text-white' style={{ background: "#595dcff2" }}>Explore Events</Link>
          </div>
        </div>
      </div>


    </>
  )
}

export default Home