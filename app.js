app.js

const express = require ('express');

const app = express();

app.get("/", (req, res) => {res.send(" Dogecoin is cryptocurrency of the future")});

app.listen(8000,() => console.log("Server is running"));