const express = require('express');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');

// Init Express
const app = express();

// BodtParse MiddleWare
app.use(bodyParse.json());

// DB Config
const db = require('./config/Keys').mongoUrl;

// Connect To Mongo
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDb Connected ...'))
    .catch(err => console.log(err))

// Use Routes
app.use('/api/todos', require('./routes/api/Todos'));

// Init Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started On Port ${PORT}`));