const express = require("express");
const app = express();

// const app = require('express')();

app.use(express.json());

console.log(__dirname);

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/xss', (req, res) => {
    res.sendFile(__dirname + '/xss.html');
});

// callback function: a function reference provided as an argument with the posibility (perhaps of being called later)

// function as first-class citizens = I can do with functions what I can do with other data types

// endpoint    // callback function
app.get("/blablabla", (req, res) => {
  res.send({ data: "They talk a lot but nothing is said" });
});
// the whole thing = route

// How can I send data in a GET request
// path variable: /users/1
// query parameters: ?userId=1&likesProgramming=true

app.get("/beers/:beerType/:amount", (req, res) => {
  console.log(req.params);
  res.send({
    data: `You ordered ${req.params.amount} of ${req.params.beerType}`,
  });
});

app.get("/bars/forgottenItems", (req, res) => {
  console.log(req.query);
  res.send({ data: req.query });
});

app.post("/dictators/", (req, res) => {
  console.log(req.body);
  res.send({});
});

// Task create a patch for dictators
app.patch('/dictators/:name', (req, res) => {
    res.send({ data: `You have turned the grat dictator - ${req.params.name} - dictator benevolent for life` });
});

app.listen(8080);
