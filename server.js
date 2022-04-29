// include modules
const express = require('express'); 
const mongoose = require('mongoose');
const cors = require('cors');

// dotenv = module 
// takes .env file, parses it and sets environment vars defined in that file in process.env
require('dotenv').config();

// create express app, which has methods for routing http requests, render, etc
const app = express();

// tell server in which port to listen
// process = global object, env = user environment, PORT = environment variable to indicate the port
// port = whatever is on PORT var (in .env file )or 8080
const port = process.env.PORT || 8080;
const uri = process.env.ATLAS_URI;

// use() = load a middleware or middleware function to use it
app.use(cors());
// json() = parses incoming requests with json payloads, use req.body.<property_name>
app.use(express.json()); 

// connect to mongoose through uri
mongoose.connect(uri, {
    useNewURLParser: true // current URL string parser is deprecated
});

// Connection used to talk to MongoDB
const connection = mongoose.connection;
// when its connected and once open console the message
// open event -- events are inherit from nodejs and are emited when somethign happens to the connection, open means successfully made initial connection and 
// once = Adds a one time listener for the event. This listener is invoked only the next time the event is fired, after which it is removed.
connection.once("open", () => 
    console.log('MongoDB connection established successfully!')
);

// bring the moduule
const outfitsRouter = require('./routes/outfits');
app.use('/outfits', outfitsRouter);

// listen the port
app.listen(port, () => console.log(`The app is running on Port: ${port}`))

