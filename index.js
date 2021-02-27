const http = require('http');
const fs = require('fs');
const express = require('express');
const axios = require('axios');



const app = express();

app.use('/', express.static(__dirname));
app.use(express.json());

app.get('/data', function(req,res){
	res.json({data: 'my data'});
})

app.listen(3001, function(){
	console.log('express server is running');
})