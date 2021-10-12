let { notes } = require("./data");

module.exports.getNotes = () => {
  return notes;
};

module.exports.getNote = (id) => {
  return notes.find((note) => note.id == id);
};

module.exports.deleteNote = (id) => {
  notes = notes.filter((note) => note.id != id);
  return notes;
};

module.exports.createNote = (note) => {
  const objProps = {
    id: Math.floor(Math.random() * Date.now()),
    created: new Date().toISOString().substring(10),
    archived: false,
  };
  notes = [{...note, ...objProps},...notes]
  return notes
};
