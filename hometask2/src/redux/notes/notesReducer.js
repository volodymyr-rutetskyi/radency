import { DELETE_NOTE } from "../types";
import initialNotesState from "./initialNotesState";

export function notesReducer(state = {notes: initialNotesState}, action) {
  switch (action.type) {
    case DELETE_NOTE:
      const notes = state.notes.filter((note) => note.id !== action.payload.id);
      return {notes};
    default:
      return state;
  }
}
