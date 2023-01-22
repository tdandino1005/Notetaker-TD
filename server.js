const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

const PORT = process.env || 3001;

const app = express();


// asks express to create a route for every file in the 'public' folder and give it a '/' route
app.use(express.static('public'));
// sets up express app to handel data parser, middle wear created req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// routes to route files
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);


// app listener - starts the server
app.listen(PORT, () => {
  console.log(`Server available at localhost${PORT}`);
});