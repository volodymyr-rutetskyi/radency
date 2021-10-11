import React from "react";
import { connect } from "react-redux";
import { deleteNote } from "../../redux/notes/noteActions";
import Row from "../row";
import './table.css'

const Table = ({ notes, deleteNote }) => {
  const tableHeadElements = ['name', 'created', 'category', 'content', 'archived', 'dates', '...']
  return (
    <div className="table">
      <div className="tableHead">
        {tableHeadElements.map(el => <div key={el}>{el}</div>)}
      </div>
      <div>
        {notes.map((note) => (
          <Row key={note.id} note={note} deleteNote={deleteNote} columnNames={tableHeadElements}/>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ notes: state.notes.list });
const mapDistapchToProps = (dispatch) => ({
  deleteNote: (id) => dispatch(deleteNote(id)),
});

export default connect(mapStateToProps, mapDistapchToProps)(Table);
