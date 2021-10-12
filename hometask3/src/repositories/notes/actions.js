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
  const newNote = {
    id: Math.floor(Math.random() * Date.now()),
    created: new Date().toISOString().substring(10),
    archived: false,
    ...note,
  };
  notes = [newNote, ...notes];
  return newNote;
};

module.exports.editNote = (id, newProps) => {
  notes = notes.map((note) =>
    note.id != id ? note : { ...note, ...newProps }
  );
  return module.exports.getNote(id);
};

module.exports.archiveNote = (id) => {
  return module.exports.editNote(id, { archived: true });
};

module.exports.unArchiveNote = (id) => {
  return module.exports.editNote(id, { archived: false });
};
