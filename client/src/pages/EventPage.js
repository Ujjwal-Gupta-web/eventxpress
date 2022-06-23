import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { get_event_by_id } from '../controllers/event';

const EventPage = () => {
    let { event_id } = useParams();
    let [event,setEvent]=useState({});

    document.title=`Loading..`;

    useEffect(()=>{
      let obj={
        event_id
      }
      get_event_by_id(obj).then(data=>{
        setEvent(data.message)
        document.title=`${data.message.event_name} | EventXpress`;
      })
    })
  return (
    <>
<div className='container'>
<h3 className='mb-3' style={{color:"#595dcff2"}}>{event.event_name}</h3>
<hr/>
<h6 class="card-subtitle mb-2 text-muted">{event.event_organizer}</h6>
<h6 class="card-subtitle mb-2 text-muted">{event.event_venue} @ {event.event_date} , {event.event_time}</h6>
<h6 class="card-subtitle mb-2 text-muted">{event.event_fee? <>Rs.{event.event_fee}/-</>:<>FREE</> }</h6>
<hr/>
<div className='p-3'>
{event.event_description}
</div>

<div className='border border-lg p-3 bg-white fw-bold' style={{color:"#fb7263"}}>
Contact
<br/>
<div className='text-dark text-muted'>
Name : {event.event_contact_name}
<br/>
Email : {event.event_contact_email}
</div>
</div>

</div>
    </>
  )
}

export default EventPage