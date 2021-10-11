import React from "react";
import Table from '../../components/table'
import NoteForm from "../../components/noteForm";

export default function () {
  return (
    <div id="homePage">
      <NoteForm />
      <Table />
    </div>
  );
}
