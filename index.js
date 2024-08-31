const express = require('express');
const path = require('path');
const staticRouter = require('./routes/staticRouter')
const {connectToMongoDB} = require('./connection');
const urlRoute = require('./routes/url')
const analyticsRoute = require('./routes/redirect');
const URL = require('./models/url');
const app = express();
const PORT = 8001;
//connection
connectToMongoDB('mongodb://127.0.0.1:27017/short-url')
.then(() => console.log('MongoDB Connected'))

//Server Side Rendering
app.set("view engine" , "ejs");
app.set("viwes" , path.resolve("./views"));

//MiddleWare - Plugin
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//Routes
app.use("/url" , urlRoute); //post request for url and analytics

app.use("/shortid" , analyticsRoute); //redirectoin

app.use("/" , staticRouter); //HOme page to accept data

//Server Start
app.listen(PORT , () => console.log('Server started at PORT:', PORT))