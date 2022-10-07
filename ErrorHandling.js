const express = require('express');
const app = express();


//Error Handling
app.use('/error', (req, res, next) => {
    const err = new Error('Successfully errored');
    next(err);
});

//Error Middleware
const errorLogger = (err, req, res, next) => {
    console.log(err.stack);
    next(err);
}
app.use(errorLogger);

//Error Middleware 2
const errorLogger2 = (err, req, res, next) => {
    console.log(err.stack);
    next(err);
}
app.use(errorLogger2);

const sendError = ((err, req, res) => {
    res.status(500).send(err.message);
});
app.use(sendError);




const server = app.listen(4000,() => 
console.log(`Server started on port ${server.address().port}`));