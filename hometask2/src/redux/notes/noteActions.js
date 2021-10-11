import { CREATE_NOTE, DELETE_NOTE, ARCHIVE_NOTE, UNARCHIVE_NOTE } from "../types";

export function deleteNote(id) {
  return {
    type: DELETE_NOTE,
    payload: {
      id,
    },
  };
}

export function createNote(newNote) {
  return {
    type: CREATE_NOTE,
    payload: {
      ...newNote,
    },
  };
}

export function archiveNote(id) {
  return {
    type: ARCHIVE_NOTE,
    payload: {
      id,
    },
  };
}

export function unarchiveNote(id) {
  return {
    type: UNARCHIVE_NOTE,
    payload: {
      id,
    },
  };
}
