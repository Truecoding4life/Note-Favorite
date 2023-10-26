// Import Require Modules
const fs = require("fs");
const express = require("express");
const router = express.Router();
const allData = require("./db");
const path = require('path');

// GET request for existing notes
router.get("/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) {
      console.error(err.status + "Bad Request" );
      // return res.status(500).json('Error in posting review');
    } else {
      // Convert string into JSON object
      console.info("Note is Displayed on Screen");
      const parsedNotes = JSON.parse(data);
      res.status(200).json(parsedNotes);
  
    }
  });
});

// POST request for adding notes
router.post("/notes", (req, res) => {
  const { title, text } = req.body;
  if (title && text) {
    const newNote = {
      title,
      text,
    };
    // Read the json file and add new comment to that file
    fs.readFile("./db/db.json", "utf8", (error, data) => {
      if (error) {
        console.log(error);
      } else {
        const parsedNotes = JSON.parse(data);
        parsedNotes.push(newNote);
        allData.push(newNote);
        console.log(newNote + "New Note Pushed to new Array of Note ");

        fs.writeFile(
          "./db/db.json",
          JSON.stringify(parsedNotes, null, 4),
          (writeErr) =>
            writeErr
              ? console.error(writeErr)
              : console.info("Array of New Note Converted to json file")
        );
      }
    });
  }
});

router.delete('/notes', (req,res) => {
    console.info("Received request for" + req);
})
module.exports = router;
