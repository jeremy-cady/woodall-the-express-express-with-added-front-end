console.log('in server.js');

// require express
const express = require('express');

// require body-parser
const bodyParser = require('body-parser');

// setup express app
const app = express();
const port = 5000;

// point express to public files
app.use(express.static('server/public'));

// setup body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

// server listening
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
    
})
