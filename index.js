const express = require('express');
const app = express();

let Countries = [`England`, `Wales`, `Scotland`, `Northern Ireland`];

app.get("/getAllCountries", (req, res) => res.send(Countries));

app.get('/get/:id', (req, res) => res.send(Countries[req.params.id]));

app.delete('/delete/:id', (req, res) => {
    res.send(Countries.splice(req.params.id,1));
});

const bodyParser = require("body-parser");

app.use(bodyParser.json());

const time = (req, res, next) => {
    console.log(timeIs());
    next();
}

app.use(time);

app.post("/createCountries", (req, res) =>{
    const newCountry = req.body.newCountry;
    Countries.push(req,body.Countries);
    res.status(201).send(`[newCountry]`);
});

app.patch("/updateCountries/:id", (req, res) => {
    console.log("ID:", req.params.id);
    console.log("QUERY:", req.query);
    res.send();
})

const deleteMiddleware = (req, res, next) => {
    console.log("Deleted");
    next();
}

app.delete("/removeCountry/:id", deleteMiddleware, (req, res) =>{
    console.log("ID", req.params.id);
    res.send(countries.splice(req.params.id));
});


const server = app.listen(2719, () => console.log(`Server started on port ${server.address().port}`));
