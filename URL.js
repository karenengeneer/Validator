const express = require('express');
const app = express();

app.get('/', function (req, res) {
      res.send('The GET request is coming');
        console.log("Request is coming");
})
app.get('/karen', function (req, res) {
      res.send('The GET request is coming from karen');
        console.log("Request is coming");
})
app.post('/', function (req, res) {
      res.send('The POST request is coming');
        console.log("Request is coming");
})

app.put('/', function (req, res) {
      res.send('The PUT request is coming');
        console.log("Request is coming");
})

app.delete('/', function (req, res) {
      res.send('The DELETE request is coming');
        console.log("Request is coming");
})
app.listen(3333);
