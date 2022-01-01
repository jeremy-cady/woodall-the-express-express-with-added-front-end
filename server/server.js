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
});


// array of trains
const trains = [
    { name: 'Thomas', color: 'Blue' },
    { name: 'Gordon', color: 'Blue' },
    { name: 'Henry', color: 'Green' },
    { name: 'James', color: 'Red' }
];


app.get('/trains', (req, res) => {
    console.log('in GET /trains');
    res.send(trains);
});

app.get('/first-train', (req, res) => {
    console.log('in GET /first-train');
    res.send(trains[0]);
    
});

app.get('/last-train', (req, res) => {
    console.log('in GET /last-train');
    res.send(trains[trains.length - 1]);
    
});

app.post('/trains', (req, res) => {
    console.log(trains);
    console.log('Data is:', req.body);
    
    let trainName = (req.body.trainName);
    let trainColor = (req.body.trainColor);

    const newTrain = {
        trainName: trainName,
        trainColor: trainColor
    }

    trains.push(newTrain);
    console.log(trains);

    res.sendStatus(201); //CREATED
    
})
