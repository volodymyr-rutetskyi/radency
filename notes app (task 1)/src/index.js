import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Note from "./models/Note";

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
  showArchive = !showArchive
  if(showArchive)
    renderArchive(getArchived(), archiveTbody)
  else renderArchive([], archiveTbody)
})

let notes = [
  new Note(
    "task",
    "finish training tasks for Radency by 16/09/2021 or at least 18/09/2021"
  ),
  new Note("idea", "find a good job in "),
  new Note("random thought", "does Elon Musk have sisters?"),
  new Note("idea", "find a summer job 1/06/2022"),
];

const categories = {
  TASK: "task",
  RANDOM_THOUGHT: "random thougnt",
  IDEA: "idea",
};

const actions = {
  DELETE: "delete",
  ARCHIVE: "archive",
  UNARCHIVE: "unarchive",
  EDIT: "edit",
};

function Main() {
  Object.keys(categories).forEach((key) => {
    categoryInput.append(
      createElem("option", [["value", categories[key]]], "", categories[key])
    );
  });
  render();
}

function render() {
  tbody.innerHTML = "";
  notes
    .filter((el) => el.archived == false)
    .forEach((note) => {
      const tr = createElem("tr");
      note.toArray().forEach((el) => {
        tr.append(createElem("td", [], el));
      });
      const actionsTd = createElem("td");
      actionsTd.append(createButton(note.content, actions.DELETE));
      actionsTd.append(createButton(note.content, actions.ARCHIVE));
      actionsTd.append(createButton(note.content, actions.EDIT));
      tr.append(actionsTd);
      tbody.append(tr);
    });
  if (showArchive) renderArchive(getArchived(), archiveTbody);
}

function renderArchive(notes, tbody) {
  tbody.innerHTML = "";
  notes.forEach((note) => {
    const tr = createElem("tr");
    note.toArray().forEach((el) => {
      tr.append(createElem("td", [], el));
    });
    const actionsTd = createElem("td");
    actionsTd.append(createButton(note.content, actions.DELETE));
    actionsTd.append(createButton(note.content, actions.ARCHIVE));
    actionsTd.append(createButton(note.content, actions.EDIT));
    tr.append(actionsTd);
    tbody.append(tr);
  });
}

function createButton(noteContent, action) {
  const button = createElem("button");
  button.className = "btn";
  button.innerText = action;
  let callback = null;

  switch (action) {
    case actions.DELETE:
      callback = () => deleteNote(noteContent);
      button.className += " btn-danger";
      break;
    case actions.ARCHIVE:
      callback = () => archiveNote(noteContent);
      button.className += " btn-warning";
      break;
    case actions.EDIT:
      callback = () => editNote(noteContent);
      button.className += " btn-secondary";
      break;
  }
  button.addEventListener("click", callback);

  return button;
}

const deleteNote = (noteContent) => {
  notes = notes.filter((note) => note.content != noteContent);
  render();
};
const archiveNote = (noteContent) => {
  notes = notes.map((note) => {
    if (note.content === noteContent) {
      note.archive();
    }
    return note;
  });
  render();
};
const editNote = (noteContent) => {
  const note = notes.find((note) => note.content === noteContent);
  contentInput.value = note.content;
  categoryInput.value = note.category;
  deleteNote(noteContent);
  render();
};

const createElem = (
  tagName,
  attributes = [],
  innerText = "",
  innerHTML = ""
) => {
  const elem = document.createElement(tagName);
  attributes.forEach((attr) => elem.setAttribute(...attr));
  if (innerText) elem.innerText = innerText;
  if (innerHTML) elem.innerHTML = innerHTML;
  return elem;
};

const getArchived = () => {
  return notes.filter((n) => n.archived === true);
};

Main();
