import express from 'express'
import mongoose from 'mongoose'
import Data from './data.js'


//app config
const app = express();
const port = 9000;

//middlewares

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

//listener
app.listen(port, ()=>console.log(`listening on localhost: ${port}`));