const express = require('express');
const app = express();
const routes = require('./routerMon.js');
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(routes);


let Countries = [`England`, `Wales`, `Scotland`, `Northern Ireland`];



const time = (req, res, next) => {
    console.log(timeIs());
    next();
}

app.use(time);


const deleteMiddleware = (req, res, next) => {
    console.log("Deleted");
    next();
}



const server = app.listen(2719, () => console.log(`Server started on port ${server.address().port}`));
