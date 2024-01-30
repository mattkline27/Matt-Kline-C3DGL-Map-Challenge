const path = require('path');
const dotenv = require('dotenv');
const envPath = path.join(__dirname, '../.env');
dotenv.config({path: envPath});

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.resolve(__dirname, '..', 'build')));

const locationRoutes = require('./locations/locationController');

app.use('/locations', locationRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

const portNumber = process.env.PORT || 3001;

app.listen(portNumber, () => {
  console.log('RrrarrrrRrrrr server alive on port 3001');
});
