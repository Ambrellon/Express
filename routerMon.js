'use strict'

const express = require('express');
const router = express();

const bodyParser = require("body-parser");
router.use(bodyParser.json());


let Countries = [`England`, `Wales`, `Scotland`, `Northern Ireland`];

router.get("/getAllCountries", (req, res) => res.send(Countries));

router.get('/get/:id', (req, res) => res.send(Countries[req.params.id]));

router.delete('/delete/:id', (req, res) => {
    res.send(Countries.splice(req.params.id,1));
});




router.post("/createCountries", (req, res) =>{
    const newCountry = req.body.newCountry;
    Countries.push(req,body.Countries);
    res.status(201).send(`[newCountry]`);
});

router.patch("/updateCountries/:id", (req, res) => {
    console.log("ID:", req.params.id);
    console.log("QUERY:", req.query);
    res.send();
})

module.exports = router;