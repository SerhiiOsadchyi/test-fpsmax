import React from 'react';

const ADD_NOTE = 'notes-reducer/ADD_NOTE';
const EDIT_NOTE = 'notes-reducer/EDIT_NOTE';
const DELETE_NOTE = 'notes-reducer/DELETE_NOTE';

const initialState = {
    notes: [],
    nextId: 1
}

const notesReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NOTE:
            return ({
                ...state,
                notes: [...state.notes, {...action.payload}],
                nextId: state.nextId + 1
            });
        case EDIT_NOTE:
            return ({
                ...state,
                notes: [...state.notes.filter(note => note.id !== action.payload.id), {...action.payload}]
            });
        case DELETE_NOTE:
            return ({
                ...state,
                notes: [...state.notes.filter(note => note.id !== action.noteId)]
            });
        default:
            return state
    }
};

export const addNewNote = (id, title, content) => ({type: ADD_NOTE, payload: {id, title, content}})
export const editNote = (id, title, content) => ({type: EDIT_NOTE, payload: {id, title, content}})
export const deleteNote = (noteId) => ({type: DELETE_NOTE, noteId})

export const addNote = (id, title, content) => dispatch => {
    dispatch(addNewNote(id, title, content))
};

export default notesReducer