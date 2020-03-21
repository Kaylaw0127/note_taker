const express = require('express')
const path = require('path');
const fs = require('fs');
const notes = require('../../db/db.json');

const app = express()
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(__dirname + "/public"));

// Route for the home page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../../index.html"));
  });


// Runs the server on the specified port
app.listen(PORT, () => {
    console.log("APP LISTENING ON PORT " + PORT)
})