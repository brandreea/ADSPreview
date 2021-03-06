const express = require('express');
const fs = require('fs');
const commentsFile = require('./comments.json');
const app = express();
const port = 3000;
var commentsCount = 0;
var commentsArray = commentsFile;

app.use(express.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, access-control-allow-origin'
  );
  next();
});

app.get('/comments', (req, res) => {
  console.log('in display');
  fs.readFile('comments.json', (err, data) => {
    if (err) throw err;
    let comments = JSON.parse(data);
    console.log(comments);
    res.send(comments);
  });
});

app.post('/comments', (req, res) => {
  console.log(req.body);
  commentsArray.unshift(req.body);
  let stringReq = JSON.stringify(commentsArray);
  fs.writeFile('comments.json', stringReq, 'utf8', function (err) {
    if (err) {
      console.log('An error occured while writing JSON Object to File.');
      return console.log(err);
    }

    console.log('JSON file has been saved.');
    res.send({ Status: 'OK', lastComment: req.body });
  });
});

app.post('/delete', (req, res) => {
  console.log('ID de sters', req.body);
  var x = commentsFile;

  commentsArray.splice(parseInt(req.body.id), 1);
  let stringReqText = JSON.stringify(commentsArray);
  fs.writeFile('comments.json', stringReqText, 'utf8', function (err) {
    if (err) {
      console.log('An error occured while writing JSON Object to File.');
      return console.log(err);
    }

    console.log('JSON file has been saved.');
    res.send({ Status: 'OK' });
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
