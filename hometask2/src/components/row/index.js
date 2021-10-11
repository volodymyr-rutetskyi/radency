import React, { useState } from "react";
import { connect } from "react-redux";
import {
  archiveNote,
  editNote,
  unarchiveNote,
} from "../../redux/notes/noteActions";
import ActionButton from "../actionButton.js";
import NoteForm from "../noteForm";
import "./row.css";

const Row = ({ note, deleteNote, archiveNote,editNote, unarchiveNote, columnNames }) => {
  const dates = note.content.match(/\d{1,2}\/\d{1,2}\/\d{4}/g);
  const [noteFormOn, setNoteFormOn] = useState(false);

  const useArchiveBtnProps = (archived) => {
    return {
      content: archived ? "unarchive" : "archive",
      action: archived
        ? unarchiveNote.bind(null, note.id)
        : archiveNote.bind(null, note.id),
    };
  };

  return (
    <div className="row">
      {columnNames.map(
        (cName, idx) =>
          typeof note[cName] !== "undefined" && (
            <div key={`${note.id}-${idx}`} className="cell">
              {note[cName].toString()}
            </div>
          )
      )}
      <div className="cell">{dates}</div>
      <div className="cell">
        <button onClick={() => deleteNote(note.id)}>delete</button>
        <ActionButton {...useArchiveBtnProps(note.archived)} />
        <button
          onClick={() => {
            setNoteFormOn(true);
          }}
        >
          edit
        </button>
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
