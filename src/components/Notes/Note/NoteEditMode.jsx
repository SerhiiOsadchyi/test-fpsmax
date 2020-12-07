import React, {useState} from 'react';
import s from './NoteEditMode.module.css';

const NoteEditMode = ({id, title = '', content = '', editNote, closeEditNote}) => {

    const [currentTitle, setTitle] = useState(title);
    const [currentContent, setContent] = useState(content);

    const submitValue = () => {
        editNote(id, currentTitle, currentContent);
        closeEditNote()
    }

    return (
        <div className={s.editNote}>
            <div>
                <input
                    placeholder='Add title'
                    name='title'
                    type='text'
                    onChange={e => setTitle(e.target.value)}
                    defaultValue={currentTitle}/>
            </div>
            <div>
                <textarea
                    name='content'
                    placeholder='Add note'
                    onChange={e => setContent(e.target.value)}
                    defaultValue={currentContent}/>
            </div>
            <div className={s.submit}>
                <button onClick={submitValue}>Submit</button>
            </div>
        </div>
    )
}

export default NoteEditMode