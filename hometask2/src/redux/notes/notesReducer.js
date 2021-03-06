import {
  ARCHIVE_NOTE,
  CREATE_NOTE,
  DELETE_NOTE,
  EDIT_NOTE,
  UNARCHIVE_NOTE,
} from "../types";
import initialNotesState from "./initialNotesState";

export function notesReducer(state = { list: initialNotesState }, action) {
  switch (action.type) {
    case DELETE_NOTE:
      return {
        ...state,
        list: [...state.list.filter((note) => note.id !== action.payload.id)],
      };
    case CREATE_NOTE:
      const newNote = {
        id: Math.random() * Date.now(),
        ...action.payload,
        archived: false,
        created: new Date().toISOString().substring(0, 10),
      };
      return { ...state, list: [...state.list, newNote] };
    case ARCHIVE_NOTE:
      return {
        ...state,
        list: state.list.map((note) =>
          note.id === action.payload.id ? { ...note, archived: true } : note
        ),
      };
    case UNARCHIVE_NOTE:
      return {
        ...state,
        list: state.list.map((note) =>
          note.id === action.payload.id ? { ...note, archived: false } : note
        ),
      };
    case EDIT_NOTE:
      console.log(action.payload)
      return {
        ...state,
        list: state.list.map((note) => {
          return note.id === action.payload.id ? { ...action.payload } : note;
        }),
      };
    default:
      return state;
  }
}
