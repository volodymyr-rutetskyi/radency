import React, { useState } from "react";
import { connect } from "react-redux";
import { createNote } from "../../redux/notes/noteActions";
import "./noteForm.css";

const NoteForm = ({ createNote }) => {
  const [newNote, setNewNote] = useState({
    name: "default name",
    category: "",
    content: "",
  });

  function changeInputHandler(event) {
    setNewNote((prev) => ({
      ...{ prev },
      ...{ [event.target.name]: event.target.value },
    }));
  }

  return (
    <form className="noteForm">
      <input
        type="name"
        name="name"
        value={newNote.name}
        onChange={changeInputHandler}
      />
      <select
        name="category"
        value={newNote.category}
        onChange={changeInputHandler}
      ></select>
      <textarea
        name="content"
        value={newNote.content}
        onChange={changeInputHandler}
      ></textarea>
      <button
        onClick={(event) => {
          event.preventDefault();
          createNote(newNote);
        }}
      >
        create
      </button>
    </form>
  );
};

const mapDistapchToProps = (dispatch) => ({
  createNote: (newNote) => dispatch(createNote(newNote)),
});

export default connect(null, mapDistapchToProps)(NoteForm);
