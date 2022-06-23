import React, { useEffect, useState } from 'react'
import EventCard from '../components/EventCard'
import { get_events } from '../controllers/event'


const Events = () => {

  let [events, setEvents] = useState([]);

  useEffect(() => {
    get_events().then(data => data.tag && setEvents(data.message));
  }, [])

  return (
    <>
      <div className='container'>
        <h3 className='mt-5 mb-4' style={{ color: "#fb7263" }}>Explore all available events</h3>
       

        <div class="d-flex  flex-wrap align-items-center justify-content-between">


          {events.length > 0 ? events.map(event => <EventCard
            {...event}
          />) :<div className='p-3 border border-lg mx-auto fw-bold w-100'>"No events are available"</div>}
       </div> 
      </div>
    </>
  )
}

export default Events