import { useState } from 'react'

export default function NoteCard({ note, deleteNote, completedNote }) {
  return (
    <div className="note-container">
      {note.position === 0 ? (
                 
        <div className="incomplete-card">
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
        <div className="complete-card">
          ` <h2>{note.text}</h2>
          <h3>{note.date}</h3>
          <h4>Importance: {note.importance}/10</h4>
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