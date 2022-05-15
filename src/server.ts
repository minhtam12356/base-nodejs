import 'dotenv/config';
import express from "express";

const app = express();

const port = process.env.PORT || 3001;

//===LISTEN PORT===
app.listen(port, function(){
    console.log(`Server listening on port ${port}`)
})