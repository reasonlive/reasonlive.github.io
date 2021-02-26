const http = require('http');
const fs = require('fs');

const axios = require('axios');





const server = http.createServer( async (req,res) => {
	if(req.url === '/'){

		let html = await fs.promises.readFile(__dirname+'/index.html', 'utf8');
		res.setHeader('statusCode', 200);
		res.setHeader('Content-Type', 'text/html');
		res.end(html);

	}

	if(req.url.match(/\.jpg$/)){
		let file = await fs.promises.readFile(__dirname+req.url);
		res.setHeader('statusCode', 200);
		res.setHeader('Content-Type', 'image/jpg');
		res.end(file);
	}

	if(req.url === '/api/data'){

		console.log('api data request');
		
		axios.get('https://www.mrsoft.by/data.json')
		.then(result=> {
			//console.log(result.data)
			res.setHeader('statusCode', 200);
			res.setHeader('Content-Type', 'application/json; utf-8');
			res.end(JSON.stringify(result.data.data));
			
		}).catch(err=>{
			res.setHeader('statusCode', 404);
			res.setHeader('Content-Type', 'application/json; utf-8');
			res.end(JSON.stringify({errorName: err.name, errorMessage: err.message}));
		})
	}

})
.listen(3001, () => {
	console.log('server is running on port 3001');
})