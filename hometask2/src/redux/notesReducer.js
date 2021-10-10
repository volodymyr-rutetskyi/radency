import { DELETE_NOTE } from "./types";

const initialState = {
  notes: [
    {
      name: "reading",
      category: "task",
      content: "finish The Black Arrow by 1/1/2022 and return it to my friend",
    },
  ],
};

export function notesReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_NOTE:
      const notes = state.notes.filter((note) => note !== action.id);
      return notes;
    default:
      return state;
  }
}
