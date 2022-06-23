const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
var bcrypt = require('bcryptjs');

const User=require("../models/User");
const Event=require("../models/Event");
const verifyToken = require("../middlewares/verifyToken");

router.post("/",verifyToken, async (req, res) => {
    let { event_name,
        event_organizer,
        event_date,
        event_time,
        event_venue,
        event_fee,
        event_type,
        event_description
         } = req.body;

    User.findOne({ _id: req.body.decoded.id }).then((data)=>{
        console.log(data);
        let event_contact_name=data.name;
        let event_contact_email=data.email;
    const event = new Event({
        event_name,
        event_organizer,
        event_date,
        event_time,
        event_venue,
        event_fee,
        event_type,
        event_description,
        event_contact_name,
        event_contact_email
    });
    event.save(function (error, document) {
        if (error) {
            console.error(error)
            return res.json({ "message": "try again", "tag": false })
        }
        //console.log(document);
        return res.json({ "message": "Event Listed Successfully", tag: true })
    })
}
    );

    
    // return res.json({ "message": "try again", "tag": false })

})

router.post("/getAll",async (req,res)=>{
    const events=await Event.find({}).sort({_id:-1});
    if(events.length>0){
        let obj=events;
        return res.json({ "tag": true, "message": obj });
    }
    return res.json({ "tag": false , "message":"No events found"});
})

// get
router.post("/get",async (req,res)=>{
    const {event_id}=req.body;
    const event=await Event.findOne({_id:event_id});
    if(event){
        return res.json({ "tag": true, "message": event });
    }
    return res.json({ "tag": false , "message":"No events found"});
})

module.exports = router;