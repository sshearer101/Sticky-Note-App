import { useState } from 'react'

export default function NoteCard({ note, deleteNote, completedNote }) {
  return (
    <div>
      {note.position === 0 ? (
                 
        <div className="note-card">
          <h2>{note.text}</h2>
          <h3>{note.date}</h3>
          <h4>Importance: {note.importance}/100</h4>
          <button
            onClick={(e) => {
              e.stopPropagation()
              deleteNote(note.id)
            }}
          >
            🗑
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              completedNote(note)
            }}
          >
            ✓
          </button>
        </div>
      ) : (
        <div>
          ` <h2>{note.text}</h2>
          <h3>{note.date}</h3>
          <h4>Importance: {note.importance}/100</h4>
          <button
            onClick={(e) => {
              e.stopPropagation()
              deleteNote(note.id)
            }}
          >
             🗑
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              completedNote(note)
            }}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  )
}