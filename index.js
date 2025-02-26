const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const menuRoutes = require('./routes/menu');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const mongoURI = 'mongodb+srv://sushmithaengr23:1yHICAM9AI7B5fD7@cluster0.pybyb.mongodb.net/ecom?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/menu', menuRoutes);

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});