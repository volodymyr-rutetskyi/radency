import React from "react";
import { connect } from "react-redux";
import "./summaryRow.css";

function SummaryRow({ notes, category }) {
  return (
    <div className="summary-row">
      <div>{category}</div>
      <div>
        {notes.reduce((count, note) => {
          return note.category === category && note.archived === false
            ? count + 1
            : count;
        }, 0)}
      </div>
      <div>
        {notes.reduce((count, note) => {
          return note.category === category && note.archived === true
            ? count + 1
            : count;
        }, 0)}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({ notes: state.notes.list });

export default connect(mapStateToProps, null)(SummaryRow);
