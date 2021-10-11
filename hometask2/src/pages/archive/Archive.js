import React from "react";
import { connect } from "react-redux";
import Table from "../../components/table";
import { Link } from "react-router-dom";

function Archive({ notes }) {
  const columns = ["name", "created", "category", "content", "dates", "unarchive"];
  return (
    <div>
     <nav>
        <Link to="/" className="btn">Go back Home</Link>
      </nav>
      <Table columns={columns} notes={notes.filter((note) => note.archived === true)} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    notes: state.notes.list,
  };
}

export default connect(mapStateToProps, null)(Archive);
