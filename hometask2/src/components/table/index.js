import React, { useState } from "react";
import { connect } from "react-redux";
import { createNote, deleteNote } from "../../redux/notes/noteActions";
import Row from "../row";
import NoteForm from "../noteForm";
import SummaryRow from "../summaryRow";
import "./table.css";
import "../../App.css";

const Table = ({
  columns,
  notes,
  deleteNote,
  createNote,
  summaryMode = false,
}) => {
  const [showNoteForm, setShowNoteForm] = useState(false);
  const categories = ["task", "idea", "random thought"];

  return (
    <div className={"table"}>
      <div className="tableHead">
        {columns.map((el) => (
          <div key={el} style={{ width: 100 / columns.length + "%" }}>
            {el}
          </div>
        ))}
      </div>

      {summaryMode === true ? (
        <div>
          {categories.map((category) => (
            <SummaryRow key={category} category={category} />
          ))}
        </div>
      ) : (
        <div>
          {notes.map((note) => (
            <Row
              key={note.id}
              note={note}
              deleteNote={deleteNote}
              columns={columns}
            />
          ))}
        </div>
      )}

      {showNoteForm && (
        <NoteForm
          title="Create new note"
          handleNote={createNote}
          closeForm={setShowNoteForm.bind(false)}
        />
      )}
    </div>
  );
};

const mapDistapchToProps = (dispatch) => ({
  deleteNote: (id) => dispatch(deleteNote(id)),
  createNote: (note) => dispatch(createNote(note)),
});

export default connect(null, mapDistapchToProps)(Table);
