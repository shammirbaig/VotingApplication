// const express = require('express')
// const mongoose = require('mongoose');
// const cors = require('cors')

// // import mongoconfig from './mongoconfig';

// require('./models/post.js')
// require('./models/user.js')

// const Post = mongoose.model("Post");


// const  MONGO_URI= 'mongodb+srv://Shammir:Shammir123@cluster0.7091gd0.mongodb.net/?retryWrites=true&w=majority'

// const port = 4000



// const app = express()



// mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, () => { console.log("your mongodb is connected........") })
// app.use(express.json())
// app.use(cors)

// app.get('/', (req, res) => {
//     console.log("main page hitted");
//     res.send('Hello World!')
// })


// // app.get('/allposts', (req, res) => {
// //     console.log("allposts is hitted");

// //     Post.find({}, (err, posts) => {
// //         if(err){
// //             console.log(err);
// //         }else{

// //         res.json({ posts })
// //         }
// //     });

// //     // .then(posts=>{res.json({posts})})


// //     // .catch((err)=>{console.log(err)})
// // })


// // app.post('/createpost', (req, res) => {
// //     console.log("create post is hitted");
// //     const { title } = req.body
// //     if (!title) {
// //         return res.status(422).json({ error: "Plase add all the fields" })
// //     }
// //     // req.user.password = undefined
// //     const post = new Post({
// //         title,

// //         postedBy: "admin"
// //     })
// //     post.save().then(result => {
// //         res.json({ post: result })

// //     })

// //         // res.json({post})
// //         .catch(err => {
// //             console.log(err)
// //         })
// // })

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })

// // app.use("/user",require('./routes/posts.js'))




const express = require('express')
const app = express()
const mongoose  = require('mongoose')
const cors = require('cors')
const PORT = process.env.PORT || 5000
// const {MONGO_URI} = require('./keys')


const  MONGO_URI= 'mongodb+srv://Shammir:Shammir123@cluster0.7091gd0.mongodb.net/?retryWrites=true&w=majority';



mongoose.connect(MONGO_URI,{ useNewUrlParser: true,useUnifiedTopology: true })

mongoose.connection.on('connected',()=>{
    console.log("mongodb is connected");
})


require('./models/user')
require('./models/post')


app.use(express.json())
app.use(cors())

app.use(require('./routes/post'))
// app.use(require('./routes/user'))
// app.use(require('./routes/student'))


app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})