const express = require('express');
const Loki = require('lokijs');

const app = express();

const db = new Loki('testing.db');
const todos = db.addCollection('todos');

const bodyParser = require('body-parser');

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  }),
);

app.get('/details/:id', (req, res) => {
  let todoDetails = {};

  try {
    [todoDetails = {}] = todos.find({ id: req.params.id });
  } catch (e) {
    console.error(`Unable to retreive todo: ${req.params.id}`);
    todoDetails = {};
  }

  console.log(
    Object.keys(todoDetails).length
      ? `Retreived ${JSON.stringify(todoDetails)}, for ${req.params.id}`
      : `No details for this id: ${req.params.id}`,
  );
  res.json(todoDetails);
});

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  let todosList = [];

  try {
    todosList = todos.find();
  } catch (e) {
    console.error('Unable to retreive todos');
    todosList = [];
  }

  console.log(`Current todo list: ${JSON.stringify(todosList)}`);
  res.json(todosList);
});

app.post('/details/:id', (req, res) => {
  let post = {};

  try {
    post = todos.insert({
      id: req.params.id,
      title: req.body.title,
      description: req.body.description,
    });
  } catch (e) {
    console.error(`Unable to create todo: ${req.body.title}`);
  }

  console.log(`created todo ${JSON.stringify(post)}`);
  res.send(post);
});

app.delete('/details/:id', (req, res) => {
  todos.findAndRemove({ id: req.params.id });

  console.log(`Removed id: ${req.params.id}`);
  res.send({ id: req.params.id, deleted: true });
});

app.listen(3010);
