import './App.css';
import {useState} from 'react'
import NoteContainer from './components/NoteContainer';
import AddNote from './components/AddNote';
import Header from './components/Header'

function App() {

  const [allNotes, setAllNotes] = useState([])
  const [search, setSearch] = useState('')


  function handleNotes(e){
    setAllNotes([...allNotes, e])
  }
  function deleteNote(id){
    setAllNotes(allNotes.filter((x) => x.id !== id))
  }

  function completedNote(note){
    if(note.position === 0){
      note.position = 1
    } else{
      note.position = 0
    }
    setAllNotes([...allNotes])
  }

 
    const displayNotes = allNotes.filter((notes) =>
      notes.text.toLowerCase().includes(search.toLowerCase()))
  
  return (
    <div className="App">
      <Header onSearch={setSearch}/>
      <AddNote handleNotes={handleNotes}/>
      <NoteContainer allNotes={displayNotes} deleteNote={deleteNote} completedNote={completedNote}/>
    </div>
  );
}

export default App;
