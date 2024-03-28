// server.js
const express = require("express");
const sqlite3 = require("sqlite3");
const cors = require("cors"); // Import cors package
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Parse JSON request bodies
app.use(bodyParser.json());

// Connect to SQLite database
const db = new sqlite3.Database("./db/db.sqlite", (err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Connected to the SQLite database.");
  }
});

// Define routes here
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.post("/api/annotators", (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  db.run("INSERT INTO annotators (name) VALUES (?)", [name], (err) => {
    if (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    } else {
      res.status(201).send("Annotator created successfully");
    }
  });
});

// Route to get all annotators
app.get("/api/annotators", (req, res) => {
  db.all("SELECT * FROM annotators", (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    } else {
      res.json(rows);
    }
  });
});

// Route to get all annotators
app.get("/api/vacations", (req, res) => {
  db.all("SELECT * FROM vacations", (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    } else {
      res.json(rows);
    }
  });
});

// Route to get all annotators and their vacations
app.get("/api/annotatorsVacations", (req, res) => {
  db.all(
    "SELECT a.id, a.name, v.start, v.end, v.description FROM annotators as a LEFT JOIN vacations AS v ON a.id = v.annotator_id",
    (err, rows) => {
      if (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
      } else {
        res.json(rows);
      }
    }
  );
});
