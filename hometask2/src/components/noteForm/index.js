import React, { useState } from "react";
import { connect } from "react-redux";
import { createNote } from "../../redux/notes/noteActions";
import "./noteForm.css";

const NoteForm = ({ handleNote, title, closeForm, note = {} }) => {
  const categories = ["task", "idea", "random thought"];

  const [newNote, setNewNote] = useState({
    name: note.name ?? "",
    category: note.category ?? categories[0],
    content: note.content ?? "",
  });

  function changeInputHandler(event) {
    setNewNote((prev) => ({
      ...prev,
      ...{ [event.target.name]: event.target.value },
    }));
  }

  function saveNote(event) {
    event.preventDefault();
    handleNote({ ...note, ...newNote });
    closeForm();
  }

  return (
    <div className="noteForm">
      <form>
        <h2>{title}</h2>
        <label>note name:</label>
        <input
          type="name"
          name="name"
          value={newNote.name}
          onChange={changeInputHandler}
        />
        <label>note category:</label>
        <select
          name="category"
          value={newNote.category}
          onChange={changeInputHandler}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <label>note content:</label>
        <textarea
          name="content"
          value={newNote.content}
          onChange={changeInputHandler}
        ></textarea>
        <button onClick={saveNote}>save</button>
      </form>
    </div>
  );
};

export default NoteForm;
