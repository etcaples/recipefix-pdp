const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// parse the url to find which path to send recipe family data
app.use('/:family', express.static(path.join(__dirname, 'public')));

// if the url doesn't match the provided endpoint, serve a page saying the searched-for page doesn't exist

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
