// Description: This file is the entry point to the application. It sets up the Express server and requires the routes.
const express = require('express');
const apiroutes = require('./routes/apiroutes');
const htmlroutes = require('./routes/htmlroutes');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware used to parse JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiroutes);
app.use('/', htmlroutes);

// Listener for the server
app.listen(PORT, () => console.log(`Now ready on PORT: ${PORT}`));