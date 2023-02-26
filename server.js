// Description: This file is the entry point to the application. It sets up the Express server and requires the routes.
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 3001;

// Middleware used to parse JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Listener for the server

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);