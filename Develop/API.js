// Import Require Modules
const fs = require('fs');
const express = require('express')
const router = express.Router()
const allData = require('./db/db.json')


// GET request for existing notes
router.get('/notes', (req,res) => { 
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err.status);
      // return res.status(500).json('Error in posting review');
    } else {
      // Convert string into JSON object
      const parsedNotes = JSON.parse(data);

      res.status(200).json(parsedNotes);
    }
  });
})

// POST request for adding notes
router.post('/notes', (req, res) => {
  const { title, text } = req.body;
  if(title && text) {
    const newNote = {
        title,
        text,
    };
    // Read the json file and add new comment to that file
    fs.readFile("./db/db.json", 'utf8', (error, data) => {
      if(error) {
        console.log(error);
      } else {
        const parsedNotes = JSON.parse(data);
        parsedNotes.push(newNote);
        allData.push(newNote);
        console.log(newNote + "New Note Added to API list ")
      
        fs.writeFile("./db/db.json", JSON.stringify(parsedNotes,null ,4),
        (writeErr) =>
            writeErr
              ? console.error(writeErr)
              : console.info('Successfully updated reviews!')
              )
      };
    })
  };
})

module.exports = router;