const express = require('express');
const body_parser = require('body-parser');
const path = require('path');
const app = express();

app.use(body_parser.json());

app.use(express.static(path.join(__dirname, './public/dist/public')));

app.listen(8000, function () {
    console.log("Server is running!");
});