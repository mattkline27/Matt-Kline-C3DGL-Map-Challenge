const path = require('path');
const dotenv = require('dotenv')

const envPath = path.join(__dirname, '../.env')
dotenv.config({path: envPath})

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const dynamoDB = require('./config/dynamoDB')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const initialLocations = [
  {
    id: 'id1',
    name: 'Denver',
    lat: 39.742043,
    lng: -104.991531,
  },
  {
    id: 'id2',
    name: 'LA',
    lat: 34.052235,
    lng: -118.243683,
  },
  {
    id: 'id3',
    name: 'Boston',
    lat: 42.364506,
    lng: -71.038887,
  },
];

app.locals.idIndex = 3;
app.locals.locations = initialLocations;

app.get('/locations', async(req, res) => {
  const params = {
    TableName: 'locations'
  }
  const locations = (await dynamoDB.scan(params).promise()).Items
  return res.send({locations})
});

app.post('/location', (req, res) => {
  const newLocation = req.body.location

  return res.send({addedLocation: newLocation})
});


app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

const portNumber = process.env.PORT || 3001;

app.listen(portNumber, () => {
  console.log('RrrarrrrRrrrr server alive on port 3001');
});
