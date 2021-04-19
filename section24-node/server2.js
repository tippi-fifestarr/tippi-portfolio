const express = require('express')

const app = express();

// boilerplate for 
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(express.static(__dirname + '/public'))
app.listen(3000);