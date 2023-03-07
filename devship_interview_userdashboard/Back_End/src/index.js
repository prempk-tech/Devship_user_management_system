const express = require('express')
var cors = require('cors')
const { Router } = require('express')
const mongoose = require('mongoose')
const registerrouter = require('./routes/reguser')

const app = express()

let database = 'mongodb://localhost:27017/testinterview';

mongoose.connect(database)

const db = mongoose.connection;

db.on('error', (error) => {
    console.log(error);
})

db.once('connected', () => {
    console.log('database connected');
})

app.use(express.json())

app.use(cors())



app.use('/api/reguser', registerrouter)

app.listen(3004, () => {
    console.log(`server running at ${3004}`);
})