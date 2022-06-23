import React, { useEffect, useState } from 'react'
import { auth_user } from '../controllers/user';
import {Link, useNavigate} from "react-router-dom"
import { host_event } from '../controllers/event';

const EventForm = () => {

const navigate=useNavigate();

  let [user, setUser] = useState("");

  useEffect(() => {
    if(localStorage.getItem("user")){
      
    let obj={
      token:localStorage.getItem("user")
    };
    auth_user(obj).then(data=>{
      if(data.tag){
        setUser(data.message._id);
        console.log(data)
      }
    })
  }
  }, [])

  const handle_host_event_form = async() => {
    let event_name = document.getElementById("event_name").value;
    let event_organizer = document.getElementById("event_organizer").value;
    let event_date = document.getElementById("event_date").value;
    let event_time = document.getElementById("event_time").value;
    let event_venue = document.getElementById("event_venue").value;
    let event_fee = document.getElementById("event_fee").value;
    let event_type = document.getElementById("event_type").value;
    let event_description = document.getElementById("event_description").value;
    let obj = {
      event_name,
      event_organizer,
      event_date,
      event_time,
      event_venue,
      event_fee,
      event_type,
      event_description
    }
    if (event_name === "" || event_date === "" || event_time === "" || event_venue === "" || event_type === "") {
      alert("Please fill all the required feilds")
      return;
    }
    host_event(obj).then(data=>{
      alert(data.message);
      if(data.tag){
        navigate("/events");
      }
    })
  }

  return (
    <>
    {user===""?
    <div className='p-3 border border-lg mx-auto w-100 fw-bold text-center'>You are not logged in....<Link to="/login">Login</Link> to continue</div>
    :

    
    <div className='container border border-lg p-4'>
    <h3 className='mb-3' style={{ color: "#484df2" }}>Event Form</h3>
    <div className='text-muted my-1 fs-7'>Fill all the required(*) fields </div>

    <div class="mb-3">
      <label for="event_name" class="form-label">Event Name*</label>
      <input type="text" class="form-control" id="event_name" />
    </div>

    <div class="mb-3">
      <label for="event_organizer" class="form-label">Event Organizing Organization Name</label>
      <input type="text" class="form-control" id="event_organizer" />
    </div>

    <div class="mb-3">
      <label for="event_date" class="form-label">Event Date*</label>
      <input type="date" class="form-control" id="event_date" />
    </div>

    <div class="mb-3">
      <label for="event_time" class="form-label">Event Time*</label>
      <input type="time" class="form-control" id="event_time" />
    </div>

    <div class="mb-3">
      <label for="event_venue" class="form-label">Event Venue*</label>
      <input type="text" class="form-control" id="event_venue" />
    </div>

    <div class="mb-3">
      <label for="event_fee" class="form-label">Event Fee</label>
      <input type="number" class="form-control" id="event_fee" />
    </div>

    <div class="mb-3">
      <label for="event_type" class="form-label">Event Type*</label>
      <input type="text" class="form-control" id="event_type" />
    </div>

    <div class="mb-3">
      <label for="event_description" class="form-label">Event Desciption</label>
      <textarea class="form-control" id="event_description" style={{ height: "160px" }}></textarea>
    </div>

    <button onClick={handle_host_event_form} class="btn btn-secondary">Register</button>

  </div>

  }
    </>
  )
}

export default EventForm