import { CREATE_NOTE, DELETE_NOTE } from "../types";

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
