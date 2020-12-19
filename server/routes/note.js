const note = require("express").Router();

// Dummy list of notes for now.
const Notes = [
  {
    NoteID: "hello",
    Title: "Hello World",
    Desc: "Hello World Hello World Hello World Hello World Hello World"
  },
  {
    NoteID: "faq",
    Title: "Frequently Asked Questions",
    Desc: "What questions are you asking frequently"
  },
  {
    NoteID: "gfg",
    Title: "GeeksforGeeks",
    Desc: "Hello GeeksforGeeks"
  }
];

note.get("/", (req, res) => {
  res.json(Notes);
});

module.exports = note;
