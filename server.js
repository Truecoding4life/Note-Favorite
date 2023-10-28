// Import requires modules
const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.port || 4200;
const api = require("./API"); // <- Express Router API

// Use Express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", api);

// Setting Route for HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

// Setting Route for Note
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.listen(PORT, () => {
  console.log(` - - -> WEBSITE IS ONLINE AT  http://localhost:${PORT} <- - -`);
});
