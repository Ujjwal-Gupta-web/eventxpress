import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import EventForm from "./pages/EventForm"
import Events from "./pages/Events"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import EventPage from "./pages/EventPage";

function App() {
  return (
    <>
       <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/events" element={<Events />} />
          <Route exact path="/events/:event_id" element={<EventPage />} />
          <Route exact path="/host_event" element={<EventForm />} />
          
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />


        </Routes>
        <Footer/>
      </BrowserRouter>
    </>  );
}

export default App;
