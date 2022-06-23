const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const Event = new Schema({
    event_name:String,
    event_organizer:String,
    event_date:String,
    event_time:String,
    event_venue:String,
    event_type:String,
    event_description:String,
    event_fee:Number,
    event_contact_name:String,
    event_contact_email:String
});


module.exports = mongoose.model('Events', Event); 