import {combineReducers} from 'redux'
import {notesReducer} from './notes/notesReducer'

export const rootReducer = combineReducers({
    notes: notesReducer
})