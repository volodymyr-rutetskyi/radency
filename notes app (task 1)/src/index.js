import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Note from "./components/Note";
import Button from "./components/Button";
import initialNotes from "./initialNotes";
import categories from "./categories";

let notes = initialNotes;

const tbody = document.getElementsByTagName("tbody")[0];
const summaryTBody = document
  .getElementById("summary-table")
  .getElementsByTagName("tbody")[0];
const summaryTHead = document
  .getElementById("summary-table")
  .getElementsByTagName("thead")[0];

const archiveBtn = document.getElementById("archive-btn");
const archiveTbody = document
  .getElementById("archive-table")
  .getElementsByTagName("tbody")[0];
let showArchive = false;

archiveBtn.addEventListener("click", () => {
  if (showArchive === true) {
    showArchive = false;
    archiveBtn.innerText = "OPEN ARCHIVE";
    render();
  } else if (showArchive === false) {
    showArchive = true;
    archiveBtn.innerText = "CLOSE ARCHIVE";
    render();
  }
});

const actions = {
  DELETE: (id) => {
    notes = notes.filter((note) => note.id != id);
    render();
  },
  ARCHIVE: (id) => {
    notes.find((note) => note.id === id).archive();
    render();
  },
  UNARCHIVE: (id) => {
    notes.find((note) => note.id === id).unarchive();
    render();
  },
  EDIT: (id) => {
    notes = notes.map((note) => {
      if (note.id === id) {
        return new Note(note.name, note.category, note.content, true);
      }
      return note;
    });
    render();
  },
  SAVE: (id) => {
    const note = notes.find((note) => note.id === id);
    if (notes.indexOf(note) === 0) {
      notes = [
        new Note(...note.toArray().splice(0, 3), true, "to be created..."),
        ...notes,
      ];
    }
    const [name, category, content] = document.getElementsByClassName(
      `input.${note.id}`
    );
    notes = notes.map((note) => {
      if (note.id === id) {
        return new Note(name.value, category.value, content.value);
      }
      return note;
    });
    render();
  },
};

function Main() {
  render();
}

function render() {
  tbody.innerHTML = "";
  archiveTbody.innerHTML = "";
  summaryTBody.innerHTML = "";
  if (!showArchive) {
    notes
      .filter((note) => note.archived === false)
      .forEach((note) => {
        if (!note.beingEdited) {
          tbody.append(
            note.toElement([
              Button(
                "delete",
                actions.DELETE.bind(null, note.id),
                "btn btn-danger"
              ),
              Button(
                "archive",
                actions.ARCHIVE.bind(null, note.id),
                "btn btn-warning"
              ),
              Button("edit", actions.EDIT.bind(null, note.id), "btn btn-info"),
            ])
          );
        } else
          tbody.append(
            note.toElement([
              Button(
                "save",
                actions.SAVE.bind(null, note.id),
                "btn btn-success"
              ),
            ])
          );
      });

    categories.forEach((cat, idx, arr) => {
      summaryTHead.className = ""
      const tr = document.createElement("tr");
      const tds = [];
      tds[0] = cat;
      tds[1] = notes.reduce((counter, note) => {
        if (note.category === cat && !note.archived) return counter + 1;
        return counter;
      }, 0);
      tds[2] = notes.reduce((counter, note) => {
        if (note.category === cat && note.archived) return counter + 1;
        return counter;
      }, 0);
      tds.forEach((td) => {
        const tdTag = document.createElement("td");
        tdTag.innerHTML = td;
        tr.append(tdTag);
      });
      console.log(summaryTBody);
      summaryTBody.append(tr);
    });
  } else {
    summaryTHead.className = "thead-hidden"
    notes
      .filter((note) => note.archived === true)
      .forEach((note) => {
        archiveTbody.append(
          note.toElement([
            Button(
              "unarchive",
              actions.UNARCHIVE.bind(null, note.id),
              "btn btn-success"
            ),
          ])
        );
      });
  }
}

const getArchived = () => {
  return notes.filter((n) => n.archived === true);
};

Main();
