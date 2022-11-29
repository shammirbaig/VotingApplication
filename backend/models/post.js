const mongoose =require('mongoose')
// const {ObjectId} = mongoose.Schema.Types
const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    // votes:[{type:ObjectId,ref:"User"}],
    votes:[{type:String}],
    postedBy:{
       type:String
    }
})

mongoose.model("Post",postSchema)