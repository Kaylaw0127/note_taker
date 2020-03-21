
const express = require('express')
const path = require('path');
const fs = require('fs');
const notes = require('./db/db.json');

const app = express()
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(__dirname + "/public"));

// Route for the home page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./index.html"));
  });

// Route for notes page
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./notes.html"))
})

//index.js route
app.get("/assets/js/index.js", function (req, res){
    res.sendFile(path.join(__dirname, "./assets/js/index.js"))
})

app.get("/api/notes", function (req, res) {
    fs.readFile('./db/db.json', `utf-8`, (err, data) => {
        if (err) throw err;
        return res.json(notes)
        
    })
});

app.post('/api/notes', function (req, res) {
    const newNote = req.body
    newNote.routeName = newNote.title.replace(/\s+/g, "").toLowerCase()
    newNote.id = newNote.title.replace(/\s+/g, "").toUpperCase()
    
    console.log('new note: ', req.body) 

    notes.push(newNote)

    res.json(newNote)
})


// Runs the server on the specified port
app.listen(PORT, () => {
    console.log("APP LISTENING ON PORT " + PORT)
})