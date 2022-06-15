import {useState} from 'react'
import uuid from 'react-uuid';

export default function AddNote({handleNotes}){
let unique_id = uuid()
    const [writtenNote, setWrittenNote] = useState({text:"", date:"", importance:""})

    function handleSubmit(e){
        e.preventDefault()
        writtenNote.id = unique_id
        writtenNote.position = 0
        handleNotes(writtenNote)
        setWrittenNote({text:"", date:"", importance:""})
    }

    return (
        <div>
          <form className="note-form" onSubmit={handleSubmit}>
            <input
              placeholder="write a note!"
              className="formInputs"
              id="myForm"
              type="text"
              name="text"
              onChange={(e) =>
                setWrittenNote({ ...writtenNote, [e.target.name]: e.target.value })
              }
              value={writtenNote.text}
            ></input>
            <input
              className="formInputs"
              type="date"
              name="date"
              onChange={(e) =>
                setWrittenNote({ ...writtenNote, [e.target.name]: e.target.value })
              }
              value={writtenNote.date}
            ></input>
            <input
              className="formInputs"
              type="range"
              name="importance"
              onChange={(e) =>
                setWrittenNote({
                  ...writtenNote,
                  [e.target.name]: e.target.value,
                })
              }
              value={writtenNote.importance}
            ></input>
            <input className="formInputs" type="submit"></input>
          </form>
        </div>
      );
    }