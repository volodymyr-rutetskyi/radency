import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Note from "./components/Note";
import Button from "./components/Button";
import initialNotes from "./initialNotes";

let notes = initialNotes;

const tbody = document.getElementsByTagName("tbody")[0];
const form = document.getElementsByTagName("form")[0];
const archiveBtn = document.getElementById("archive-btn");
const archiveTbody = document
  .getElementById("archive-table")
  .getElementsByTagName("tbody")[0];
let showArchive = false;

const [categoryInput, disabled, contentInput, createBtn] =
  form.getElementsByTagName("*");

createBtn.addEventListener("click", (e) => {
  e.preventDefault();
  notes = [...notes, new Note(categoryInput.value, contentInput.value)];
  contentInput.value = categoryInput.value = "";
  render();
});

archiveBtn.addEventListener("click", () => {
  if (showArchive === true) {
    showArchive = false;
    archiveBtn.innerText = "OPEN ARCHIVE";
    renderArchive([], archiveTbody);
  } else {
    showArchive = true;
    archiveBtn.innerText = "CLOSE ARCHIVE";
    renderArchive(getArchived(), archiveTbody);
  }
});



const categories = {
  TASK: "task",
  RANDOM_THOUGHT: "random thougnt",
  IDEA: "idea",
};

const actions = {
  DELETE: (noteId) => {
    notes = notes.filter((note) => note.id != noteId);
    render();
  },
  ARCHIVE: () => {},
  EDIT: () => {},
};

function Main() {
  render();
}

function render() {
  tbody.innerHTML = "";
  notes.forEach((note) => {
    tbody.append(
      note.toElement([
        Button("delete", actions.DELETE.bind(null, note.id), "btn btn-danger"),
      ])
    );
  });
}

const getArchived = () => {
  return notes.filter((n) => n.archived === true);
};

function editNotes(logic) {
  logic();
  render();
}

Main();
