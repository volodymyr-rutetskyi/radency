const { notes } = require("../repositories/notes/data");
const { categories } = require("../repositories/notes/categories");

module.exports.getSummary = (category) => {
  const filteredNotes = notes.filter((note) => note.category == category);
  return {
    [category]: {
      active: filteredNotes.reduce((count, note) => {
        return note.archived == false ? count + 1 : count;
      }, 0),
      archived: filteredNotes.reduce((count, note) => {
        return note.archived == true ? count + 1 : count;
      }, 0),
    },
  };
};

module.exports.getFullSummary = () => {
  const fullSummary = [];
  categories.forEach((cat) => {
    fullSummary.push(module.exports.getSummary(cat));
  });
  return fullSummary;
};
