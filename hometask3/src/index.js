const express = require("express");
const {
  getNote,
  getNotes,
  deleteNote,
  createNote,
  editNote
} = require("./repositories/notes/actions");
const { getFullSummary } = require('./helpers/summary')

const app = express();
const PORT = 5000;

app.use(express.json())

app.get("/notes", (req, res) => {
  res.send(getNotes());
});

app.get('/notes/stats', (req, res) => {
  res.send(getFullSummary())
})

app.get("/notes/:id", (req, res) => {
  res.send(getNote(req.params.id));
});

app.delete("/notes/:id", (req, res) => {
  res.send(deleteNote(req.params.id));
});

app.post('/notes', (req, res) => {
  res.send(createNote(req.body))
})

app.patch('/notes/:id', (req, res) => {
  res.send(editNote(req.params.id, req.body))
})

app.listen(PORT, () => {
  console.log(`server in working on port ${PORT}`);
});
