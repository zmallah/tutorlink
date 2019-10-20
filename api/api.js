const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

const User = require('./User');
const Group = require('./Group')

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

app.post('/api/users/verifyLogin', async (req, res) => {
  var result = await User.verifyLogin(req);
  res.send(result); 
});

app.post('/api/Groups/create', (req, res) => {
  var result = await Group.create(req);
  res.send({result});
});

app.post('/api/Groups/update', (req, res) =>{
  Group.update(req);
  res.send({updateSuccess: true});
});

app.listen(app.port, () => console.log(`Listening on port ${app.port}`));

module.exports = app;