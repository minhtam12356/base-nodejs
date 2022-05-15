import cors from 'cors';
import 'dotenv/config';
import express from "express";
import mongoose from 'mongoose';
import productsRoute from './api/route/products.route.js';

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
    console.log('Mongo Connected');
})

//===LISTEN PORT===
app.listen(port, function(){
    console.log(`Server listening on port ${port}`)
})

//===API===
app.use('/', productsRoute);
app.use('/login', LoginRouter);
