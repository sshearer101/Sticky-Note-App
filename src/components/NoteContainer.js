import { useState } from 'react'
import NoteCard from './NoteCard'

export default function NoteContainer({ allNotes, deleteNote, completedNote }) {
  return (
    <div className="task-container">
      <div className="task-titles">
        <h1>Tasks</h1>
        <h1>Completed Tasks</h1>
      </div>
      {allNotes.map((note, i) => (
        <NoteCard
          key={i}
          note={note}
          deleteNote={deleteNote}
          completedNote={completedNote}
        />
      ))}
    </div>
  )
}
