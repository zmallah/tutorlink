const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

const User = require('./User');

const app = express();
app.port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/users/create', (req, res) => {
  User.create(req);
  res.send({ 
    creationSuccess: true
  });
});


app.listen(app.port, () => console.log(`Listening on port ${app.port}`));

module.exports = app;