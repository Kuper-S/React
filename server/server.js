const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;
// set up express app
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(PORT, function(){
    console.log(`Server started on port "http://localhost:${PORT}`);
});
