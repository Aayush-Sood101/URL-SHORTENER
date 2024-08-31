const express = require('express');
const {connectToMongoDB} = require('./connection');
const urlRoute = require('./routes/url')
const analyticsRoute = require('./routes/redirect');
const URL = require('./models/url');
const app = express();
const PORT = 8001;
//connection
connectToMongoDB('mongodb://127.0.0.1:27017/short-url')
.then(() => console.log('MongoDB Connected'))

//MiddleWare - Plugin
app.use(express.json());

//Routes
app.use("/url" , urlRoute);

app.use("/" , analyticsRoute);


//Server Start
app.listen(PORT , () => console.log('Server started at PORT:', PORT))