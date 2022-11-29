const mongoose= require('mongoose')
const express = require('express')
const router = express.Router()

const Post = mongoose.model("Post");


router.get("/allposts",(req,res)=>{
    console.log("You fetched all posts!!")
    Post.find()

    .then(posts=>{res.json({posts})})
    .catch((err)=>{console.log(err)})
    
// res.json({"title":"Shammir"})

})


router.post('/createpost',(req,res)=>{
    console.log("You created a new post");
    const {title} = req.body 
    if(!title ){
      return  res.status(422).json({error:"Plase add all the fields"})
    }
    // req.user.password = undefined
    const post = new Post({
        title,

        postedBy:"admin"
    })
    post.save().then(result=>{
        res.json({post:result})
        
    })

    // res.json({post})
    .catch(err=>{
        console.log(err)
    })
})


router.put('/vote',(req,res)=>{
   
    console.log("you have given a new vote!!")
    const {postId,userId} = req.body
    
    Post.findByIdAndUpdate(postId,{
        $push:{votes:userId}
    },{
        new:true
    }).exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
           
            res.json(result)
        }
    })
})

router.patch('/removevote',(req,res)=>{
   
    console.log("you have removed your vote!!")
    const {postId,userId} = req.body
    
    Post.findByIdAndUpdate(postId,{
        $pull:{votes:userId}
    },{
        new:true
    }).exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
           
            res.json(result)
        }
    })
})



module.exports= router;