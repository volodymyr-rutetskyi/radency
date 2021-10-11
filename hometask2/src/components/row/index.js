import React, { useState } from "react";
import { connect } from "react-redux";
import {
  archiveNote,
  editNote,
  unarchiveNote,
} from "../../redux/notes/noteActions";
import NoteForm from "../noteForm";
import "./row.css";

const Row = ({
  note,
  deleteNote,
  archiveNote,
  editNote,
  unarchiveNote,
  columns,
}) => {
  const dates = note.content.match(/\d{1,2}\/\d{1,2}\/\d{4}/g);
  const [noteFormOn, setNoteFormOn] = useState(false);

  return (
    <div className="row">
      {columns.map(
        (cName, idx) =>
          typeof note[cName] !== "undefined" && (
            <div key={`${note.id}-${idx}`} className="cell">
              {note[cName].toString()}
            </div>
          )
      )}
      <div className="cell">
        {dates&&dates.map((d, idx, arr) => (
          <div>
            <span>{d}</span>
            <br/>
          </div>
        ))}
      </div>
      <div className="cell">
        {!note.archived ? (
          <div>
            <button onClick={() => deleteNote(note.id)}>delete</button>
            <button onClick={() => archiveNote(note.id)}>archive</button>
            <button
              onClick={() => {
                setNoteFormOn(true);
              }}
            >
              edit
            </button>
          </div>
        ) : (
          <div>
            <button onClick={() => unarchiveNote(note.id)}>unarchive</button>
          </div>
        )}
      </div>
      {noteFormOn && (
        <NoteForm
          closeForm={setNoteFormOn.bind(false)}
          handleNote={editNote}
          title="edit note"
          note={note}
        />
      )}
    </div>
  );
};

const mapDistapchToProps = (dispatch) => ({
  archiveNote: (id) => dispatch(archiveNote(id)),
  unarchiveNote: (id) => dispatch(unarchiveNote(id)),
  editNote: (note) => dispatch(editNote(note)),
});

export default connect(null, mapDistapchToProps)(Row);
