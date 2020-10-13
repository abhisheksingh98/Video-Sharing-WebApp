import express from 'express'
import mongoose from 'mongoose'
import Data from './data.js'
import data from './data.js'
import Videos from './dbModel.js'

//app config
const app = express();
const port = 9000;

//middlewares
app.use(express.json())
//DB config
const connection_url = 'mongodb+srv://admin:8i6C6RftdGgTxXku@cluster0.y6e1m.mongodb.net/tiktok?retryWrites=true&w=majority'

mongoose.connect(connection_url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})


//api endpoints
app.get('/',(req,res)=> res.status(200).send('hello world'));

app.get('/v1/posts',(req,res)=> res.status(200).send(Data))

app.get('./v2/posts',(req,res)=>{
    Videos.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else {
            res.status(200).send(data);
        }
    })
})

app.post('v2/posts',(req,res)=>{
    //POST request is to ADD Data to the DB
    //It will let us add a video doc to video collection
    const dbVideos = req.body;

    Videos.create(dbVideos, (err, data)=> {
        if(err){
            res.status(500).send(err);
        }
        else {
            res.status(201).send(data);
        }
    })
})


//listener
app.listen(port, ()=>console.log(`listening on localhost: ${port}`));