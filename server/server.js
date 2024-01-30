const path = require('path');
const dotenv = require('dotenv');
const envPath = path.join(__dirname, '../.env');
dotenv.config({path: envPath});

const crypto = require('crypto')

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {validateNewLocation} = require("./validators");
const app = express();

const documentClient = require('./config/dynamoDB').documentClient

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/locations', async(req, res) => {
  const dynamoParams = {
    TableName: 'locations'
  }
  const locations = (await documentClient.scan(dynamoParams).promise()).Items
  return res.send({locations})
});

app.post('/location',  validateNewLocation({latitude: 'location.lat', longitude: 'location.lng', name: 'location.name'}), async (req, res) => {
  const newLocation = {...req.body.location, id: crypto.randomUUID()}

  const dynamoParams = {
    TableName: 'locations',
    Item: newLocation,
  }

  await documentClient.put(dynamoParams).promise()

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
