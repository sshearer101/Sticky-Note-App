import './App.css';
import {useState} from 'react'
import NoteContainer from './components/NoteContainer';
import AddNote from './components/AddNote';
import Header from './components/Header'

function App() {

  const [allNotes, setAllNotes] = useState([])

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

  function onSearch(e){
    console.log(e)
  }
  return (
    <div className="App">
      <Header onSearch={onSearch}/>
      <AddNote handleNotes={handleNotes}/>
      <NoteContainer allNotes={allNotes} deleteNote={deleteNote} completedNote={completedNote}/>
    </div>
  );
}

export default App;
