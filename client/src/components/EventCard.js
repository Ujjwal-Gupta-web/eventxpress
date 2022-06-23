import React from 'react'
import { Link } from 'react-router-dom'

const EventCard = (props) => {
  return (
    <>
    <div class="card mx-3 my-2" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">{props.event_name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{props.event_organizer}</h6>

              <h6 class="card-subtitle mb-2 text-muted">{(props.event_date).split("-").reverse().join("-")} , {props.event_time}</h6>
              <Link to={"/events/"+props._id} class="card-link">For More Details</Link>
              <br />
              <span class="badge text-bg-secondary mt-3">{props.event_type}</span>
              <span class="badge text-bg-dark mx-3 mt-3">{(props.event_fee)?<>Rs.{props.event_fee}/-</>:<></>}</span>
            </div>
          </div>
    </>
  )
}

export default EventCard