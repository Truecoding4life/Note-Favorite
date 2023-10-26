const express = require('express');
const app = express();
const path = require('path');
const PORT = 3001;
const api = require('./API')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', api);

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
})




app.listen(PORT, () => { 
    console.log(` - - -> WEBSITE IS ONLINE AT  http://localhost:${PORT} <- - -`)
})