import React from 'react';

import {addNote, deleteNote, editNote} from "../redux/notes-reducer";
import {connect} from "react-redux";
import Notes from "./Notes";

const NotesContainer = (props) => {

    return <Notes
        notes={props.notes}
        nextId={props.nextId}
        addNote={props.addNote}
        editNote={props.editNote}
        deleteNote={props.deleteNote} />

};

const mapStateToProps = (state) => ({
    notes: state.notesPage.notes,
    addNote: state.notesPage.addNote,
    nextId: state.notesPage.nextId,
    editNote: state.notesPage.editNote,
    deleteNote: state.notesPage.deleteNote,
});

export default connect(mapStateToProps, {addNote, editNote, deleteNote})(NotesContainer)