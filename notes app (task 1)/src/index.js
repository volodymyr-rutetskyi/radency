import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Note from "./models/Note";

const tbody = document.getElementsByTagName("tbody")[0];
const notes = [
  new Note(
    "task",
    "finish training tasks for Radency by 16/09/2021 or at least 18/09/2021"
  ),
  new Note("idea", "find a good job in "),
  new Note("random thought", "does Elon Musk have sisters?"),
  new Note("idea", "find a summer job 1/06/2022"),
];

function Main() {
  render();
}

function render() {
  tbody.innerHTML = "";
  notes.forEach((note) => {
    const tr = document.createElement("tr");
    note.toArray().forEach(el => {
      const td = document.createElement("td");
      td.innerText = el;
      tr.append(td);
    })
    tbody.append(tr);
  });
}

Main();
