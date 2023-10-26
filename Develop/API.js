const fs = require('fs');
const express = require('express')
const router = express.Router()
const allData = require('./db/db.json')



router.get('/notes', (req,res) => { 
  res
})

router.post('/notes', (req, res) => {
  const { title, text } = req.body;
  if(title && text) {
    const newNote = {
        title,
        text,
    };

    fs.readFile('Develop/db/db.json', 'utf8', (error, data) => {
      if(error) {
        console.log(error);
      } else {
        const parsedNotes = JSON.parse(data);
        parsedNotes.push(newNote);
      
        fs.writeFile('./db/db.json', JSON.stringify(parsedNotes,))

      };
    })
  };
})

module.exports = router;