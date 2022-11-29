const express = require('express')

const mongoose =require('mongoose') 
const router = express.Router()
const User = mongoose.model("User");



router.post('/signup', async (req, res) => {
    const { name, email } = req.body;
    const user = new User({ name, email })

    try { await user.save() }
    catch {(err) => { console.log(err) }}
           
        
    
})



module.exports=router;