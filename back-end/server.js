const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

let messages = [];
let users = [];

let nextMessageId = 0;
let nextuserID = 0;

app.get('/messages', (req, res) => {
  res.send(messages);
});

app.post('/messages', (req, res) => {
  try {
    let newMessageText = req.body.message;
    console.log(req.header('Authorization'), users);
    const token = req.header('Authorization');
    const userID = jwt.decode(token, '123');
    let user = users.find(user => user.id === parseInt(userID));
    let newMessage = {
      id: nextMessageId++,
      name: newMessageText,
      username: user.username,
    };
    messages.push(newMessage);
    res.json(newMessage);
    console.log(messages);
  } catch (error) {
    res.status(404).json({ error: 'Utilisateur non trouvé' });
    return;
  }
});

app.post('/register', (req, res) => {
  let registerData = req.body;
  let user = users.find(user => user.username === registerData.username);
  if (user) {
    res.status(422).json({ error: 'Username déjà pris' });
    return;
  } else {
    let newUser = {
      id: nextuserID++,
      ...registerData,
    }
    users.push(newUser);
    let token = jwt.sign(newUser.id, '123');
    res.json(token)
    return;
  }
});    

app.post('/login', (req, res) => {
  let loginData = req.body;
  let user = users.find(user => user.username === loginData.username && user.password === loginData.password);
  if (user) {
    let token = jwt.sign(user.id, '123');
    res.json(token)
    return;
  } else {
    res.status(404).json({ error: 'Utilisateur non trouvé' });
    return;
  }
});  

app.get('/messages/:id', (req, res) => {
  let id = req.params.id;
  let message = messages.find(message => message.id === parseInt(id));
  if (message) {
    res.json(message);
  } else {
    res.status(404).json({ error: 'Message non trouvé' });
  }
});

app.delete('/messages/:id', (req, res) => {
  let id = req.params.id;
  let index = messages.findIndex(message => message.id === parseInt(id));
  if (index !== -1) {
    messages.splice(index, 1);
    res.json(messages);
  } else {
    res.status(404).json({ error: 'Message non trouvé' });
  }
  console.log(messages);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
