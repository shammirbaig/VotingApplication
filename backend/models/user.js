const mongoose =require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    
    email:{
        type:String,
        required:true
    },
   
    isAdmin:{
        type:Boolean,
        default:false
    },
   
})


mongoose.model("User",userSchema)