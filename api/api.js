const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

const User = require('./User');
const Group = require('./Group');
const Archive = require('./Archive');
const app = express();
app.port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var archive = Archive.find();
if(archive === null){
  Archive.create();
}

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
  var result = Group.create(req);
  res.send(result);
});

app.post('/api/Groups/find', async (req, res) => {
  var result = await Group.find(req);
  res.send(result);
});

app.post('/api/Groups/update', async (req, res) =>{
  var result = await Group.update(req);
  res.send(result);
});

app.post('/api/Groups/delet', async(req, res) =>{
  var result = await Group.delet(req);
  res.send(result);
});


app.listen(app.port, () => console.log(`Listening on port ${app.port}`));

module.exports = app;