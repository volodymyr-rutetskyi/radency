import React from "react";
import './row.css'

const Row = ({ note, deleteNote, columnNames }) => {
  return (
    <div className="row">
        {columnNames.map(cName => <div className="cell">{note[cName]}</div>)}
    </div>
  );
};

export default Row
