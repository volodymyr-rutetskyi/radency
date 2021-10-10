import { DELETE_NOTE } from "./types";

export function deleteNote(id) {
    return {
        type: DELETE_NOTE,
        payload: id
    }
}