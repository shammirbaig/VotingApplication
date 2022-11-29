// import express from 'express'
// import mongoose from 'mongoose';
// import cors from 'cors';

const express = require('express');
const mongoose =require('mongoose');
const cors = require('cors')


require('./models/post.js')
require('./models/user.js')

// import postroute from './routes/posts.js';
// import userroute from './routes/posts.js';



const PORT = 4000;



mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, () => { console.log("your mongodb is connected........") })
const app = express()
app.use(cors)
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
    console.log("yeah we hitted this");
  })

app.use("/user",require('./routes/posts.js'))
app.use(require('./routes/user.js'))


app.listen(PORT, () => { console.log("server is listening on", PORT) })