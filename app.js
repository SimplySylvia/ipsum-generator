// require express
const express = require('express');
const app = express();

// require express routes found in router.js
const routes = require('./router');

// define hostname and port
const hostname = "127.0.0.1";
const port= 3000;

// define where static files can be found
app.use(express.static('public'));

// specify routes
app.use(routes);

// set server port
app.listen(port, () => {
    console.log(`server is listening at http://${hostname}:${port}/`);
})