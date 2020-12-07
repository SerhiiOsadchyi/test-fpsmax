import React, {useState} from 'react';
import editButton from '../../../images/edit.png'
import deleteButton from '../../../images/delete.png'
import NoteEditMode from "./NoteEditMode";
import s from './Note.module.css';
import DOMPurify from 'dompurify';

const Note = React.memo(({id, title, content, editNote, deleteNote}) => {

    const [editMode, setEditMode] = useState(false)

    const closeEditNote = () => {
        setEditMode(false)
    }

    const convertTextToHTML = (text) => {
        let elementsArray = text.split('\n');
        let textInHTML = document.createElement('div');
        for (let index in elementsArray) {
            let element = document.createElement('p');
            element.innerHTML = elementsArray[index];
            textInHTML.appendChild(element);
        }
        return DOMPurify.sanitize(textInHTML.innerHTML)
    };

    return (
        <div className={s.note}>
            {editMode === false ?
                <div>
                    <h3>{title}</h3>
                    <div className={s.editNote}>
                        <button onClick={() => setEditMode(true)}>
                            <img src={editButton} alt="Add note"/></button>
                        <button onClick={() => deleteNote(id)}>
                            <img src={deleteButton} alt="Add note"/></button>
                    </div>

                    <div className={s.noteContent}
                         dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(convertTextToHTML(content))}}/>
                    <hr/>

                </div>
                : <NoteEditMode
                    id={id}
                    title={title}
                    content={content}
                    editNote={editNote}
                    closeEditNote={closeEditNote}/>
            }
        </div>
    )
})

export default Note
