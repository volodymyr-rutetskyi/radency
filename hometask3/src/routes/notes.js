const express = require("express");
const router = express.Router();
const {
  getNote,
  getNotes,
  deleteNote,
  createNote,
  editNote,
} = require("../repositories/notes/actions");
const { getFullSummary } = require("../helpers/summary");
const { createSchema } = require("../models/noteSchema");
const noteSchema = createSchema();

router.get("/", (req, res) => {
  res.send(getNotes());
});

router.get("/stats", (req, res) => {
  res.send(getFullSummary());
});

router.get("/:id", (req, res) => {
  res.send(getNote(req.params.id));
});

router.delete("/:id", (req, res) => {
  res.send(deleteNote(req.params.id));
});

router.post("/", (req, res) => {
  noteSchema
    .validate(req.body)
    .then(() => {
      res.status(201).send(createNote(req.body));
    })
    .catch((err) => res.status(400).send(err));
});

router.patch("/:id", (req, res) => {
  res.send(editNote(req.params.id, req.body));
});

module.exports = router;
