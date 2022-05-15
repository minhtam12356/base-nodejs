import cors from 'cors';
import 'dotenv/config';
import express from "express";
import mongoose from 'mongoose';

const app = express();
const { PORT, MONGODB_URI = "" } = process.env;

const port = PORT || 3001;

app.use(cors());
//===STATIC FILE===
app.use(express.static('public'));

// connect mongoDB
mongoose.connect(MONGODB_URI, function (err) {
    if (err) 
        throw err;
    console.log('Successfully connected');
})

//===LISTEN PORT===
app.listen(port, function(){
    console.log(`Server listening on port ${port}`)
})
