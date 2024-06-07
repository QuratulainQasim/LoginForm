const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();
const PORT = 4500;
const SECRET_KEY = 'c9e5dd54f0e4caa73ca772c039d66ee997356ddd62dd5bddfe294fe78684b3f37115c7eefd2a59b6610789554fc1377efa7480b19f29cffdeaabb0f56582ad94';

app.use(bodyParser.json());
app.use(cors());

let users = [
  {
    username: 'Ainee',
    password: bcrypt.hashSync('Ainoo%12', 8)
  },
  {
    username: 'user2',
    password: bcrypt.hashSync('password2', 8)
  }
]; // This will act as our in-memory database

app.post('/api/register', (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);
  users.push({ username, password: hashedPassword });
  res.status(200).send({ message: 'User registered successfully!' });
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) {
    return res.status(404).send({ message: 'User not found!' });
  }
  const passwordIsValid = bcrypt.compareSync(password, user.password);
  if (!passwordIsValid) {
    return res.status(401).send({ message: 'Invalid password!' });
  }
  const token = jwt.sign({ id: user.username }, SECRET_KEY, { expiresIn: 86400 });
  res.status(200).send({ token });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
