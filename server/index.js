const express = require('express');
const cors = require('cors');
const loginRouter = require('./routes/login');
const homeRouter = require('./routes/home');
const app = express();

//Body Parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Use .env file in config folder
require('dotenv').config({ path: './src/config/.env' })

//middleware
app.use(express.json());
app.use(cors());

app.use("/", loginRouter);
//app.use("/home", homeRouter);


app.listen(3001, () => console.log("Server started"));