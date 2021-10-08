import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Note from "./models/Note";

const tbody = document.getElementsByTagName("tbody")[0];
const form = document.getElementsByTagName("form")[0];
const [categoryInput, contentInput, createBtn] = form.getElementsByTagName("input")
createBtn.addEventListener("click", (e) => {
  e.preventDefault()
  notes = [...notes, new Note(categoryInput.value, contentInput.value)]
  contentInput.value = categoryInput.value = ''
  render()
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

const actions = {
  DELETE: "delete",
  ARCHIVE: "archive",
  EDIT: "edit",
};

function Main() {
  render();
}

function render() {
  tbody.innerHTML = "";
  notes
    // .filter((el) => el.archived == false)
    .forEach((note) => {
      const tr = document.createElement("tr");
      note.toArray().forEach((el) => {
        const td = document.createElement("td");
        td.innerText = el;
        tr.append(td);
      });
      const actionsTd = document.createElement("td");
      actionsTd.append(createButton(note.id, actions.DELETE));
      actionsTd.append(createButton(note.id, actions.ARCHIVE));
      tr.append(actionsTd);
      tbody.append(tr);
    });
}

function createButton(noteId, action) {
  const button = document.createElement("button");
  button.innerText = action;

  switch (action) {
    case actions.DELETE:
      button.addEventListener("click", () => {
        notes = notes.filter((note) => note.id != noteId);
        render();
      });
      break;
    case actions.ARCHIVE:
      button.addEventListener("click", () => {
        notes = notes.map((note) => {
          if (note.id === noteId) {
            note.archivedToggle();
          }
          return note;
        });
        render();
      });
      break;
  }

  return button;
}

Main();
