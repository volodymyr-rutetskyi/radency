import React from "react";
import "./row.css";

const Row = ({ note, deleteNote, columnNames }) => {
  const dates = note.content.match(/\d{1,2}\/\d{1,2}\/\d{4}/g);

  return (
    <div className="row" >
      {columnNames.map(
        (cName, idx) =>
          note[cName] && (
            <div key={`${note.id}-${idx}`} className="cell">
              {note[cName]}
            </div>
          )
      )}
      <div className="cell">{dates}</div>
      <div className="cell">
        <button onClick={() => deleteNote(note.id)}>delete</button>
        <button></button>
        <button></button>
      </div>
    </div>
  );
};

export default Row;
