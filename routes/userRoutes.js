const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
var bcrypt = require('bcryptjs');

const User=require("../models/User");


router.post("/auth", async (req, res) => {
    const token = req.body.token;
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const user = await User.findOne({ _id: decoded.id }).select("-password");

        return res.json({
            "tag": true,
            "message": user
        });
    }
    catch (error) {
        console.log(error);
        return res.json({
            "tag": false,
            "message": "Not Atuhenticated User"
        });
    }
})

router.post("/login", async (req, res) => {

    const obj = req.body;
    const result = await User.findOne({ email: obj.email });
    if (result) {
        bcrypt.compare(req.body.password, result.password, function (err, hashed) {
            if (hashed === true) {
                const token = jwt.sign({ id: result._id }, process.env.SECRET_KEY);
                return res.json({ "message": "Login success", "token": token, "tag": true })
            }
            else {
                return res.json({ "message": "Login failed", "tag": false })
            }
        });
    }
    else {
        return res.json({ "message": "Login failed", "tag": false })
    }

})


router.post("/signup", async (req, res) => {

    let { email,
        password,
        name} = req.body;

    const result = await User.findOne({ email });

    if (result) {
        return res.json({ "message": "User already exists", "tag": false })
    }
    else {
        var hash = bcrypt.hashSync(password, 8);
        password = hash;
        const user = new User({
            email,
            password,
            name
        })
        user.save(function (error, document) {
            if (error) {
                console.error(error)
                return res.json({ "message": "try again", "tag": false })
            }
            //console.log(document);
            return res.json({ "message": "User SignUp Success", tag: true })
        })
    }

})

// router.post("/getDetails", async (req, res) => {

//     let { user_id } = req.body;

//     const user = await User.findOne({ _id:user_id });

//     if(user){
//         let obj={
//             email:user.email,
//             name:user.name
//         }
//         return res.json({ "message": obj, "tag": true })
//     }
//     else{
//         return res.json({ "message": "User doesnot exist", "tag": false })
//     }

    
// })




module.exports = router;