import React, {useState} from 'react';
import s from './Notes.module.css';
import addButton from '../../images/add.png'
import Note from "./Note/Note";
import NoteEditMode from "./Note/NoteEditMode";

const Notes = (props) => {

    const notes = props.notes;
    const [editMode, setEditMode] = useState(false)

    const closeEditNote = () => {
        setEditMode(false)
    }

    const switchToEditNote = () => {
        return (
            <div>
                { editMode === false ?
                    <div  className={s.addButton}>
                    <button onClick={() => setEditMode(true)}>
                        <img src={addButton} alt="Add note"/></button>
                        </div>
                    : <NoteEditMode
                        id={props.nextId}
                        editNote={props.addNote}
                        closeEditNote={closeEditNote}/> }
            </div>
        )
    }

    return (
        <div className={s.notes}>
            {switchToEditNote()}
            { notes.length > 0 ?
                <div> { notes.map((note) =>
                        <div key={note.id}>
                            <Note id={note.id}
                                  title={note.title}
                                  content={note.content}
                                  editNote={props.editNote}
                                  deleteNote={props.deleteNote}/>
                        </div>) }
                </div>
                : <></> }
        </div>
    )
};

export default Notes