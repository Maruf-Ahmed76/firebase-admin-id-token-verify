// Module
let express = require('express');

// Router
let homeRoute = require('./routes/homeRoute');

// App
let app = express();
app.use(express.static('public'));
app.use(express.json());
app.set('view engine', 'ejs');

app.use(homeRoute);

// Run server
app.listen(3000, () => {
    console.log("Server is runing at port 3000");
})
