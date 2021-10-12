import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NoteForm from "../../components/noteForm";
import Table from "../../components/table";
import { createNote } from "../../redux/notes/noteActions";
import "./home.css";

function Home({ notes, createNote }) {
  const columns = ["name", "created", "category", "content", "dates", "actions"];
  const summaryColumns = ["category", "active", "archived"];
  const [showNoteForm, setShowNoteForm] = useState(false);

  return (
    <div id="homePage">
      <nav>
        <Link to="/archive" className="btn">Go to Archive</Link>
      </nav>
      <Table
        columns={columns}
        notes={notes.filter((note) => note.archived === false)}
      />
      <div className="separator">
        <button className="btn" onClick={() => setShowNoteForm(true)}>create note</button>
      </div>
      <Table
        columns={summaryColumns}
        summaryMode={true}
        notes={notes.filter((note) => note.archived === false)}
      />
      {showNoteForm && (
        <NoteForm
          title="Create note"
          closeForm={setShowNoteForm.bind(false)}
          handleNote={createNote}
        />
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    notes: state.notes.list,
  };
}

function mapDistapchToProps(dispatch) {
  return {
    createNote: (note) => dispatch(createNote(note)),
  };
}

export default connect(mapStateToProps, mapDistapchToProps)(Home);
