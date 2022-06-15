import './App.css';
import {useState} from 'react'
import NoteContainer from './components/NoteContainer';
import SearchBar from './components/SearchBar';
import AddNote from './components/AddNote';

function App() {

  const [allNotes, setAllNotes] = useState([])

  function handleNotes(e){
    setAllNotes([...allNotes, e])
  }
console.log(allNotes)
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
  return (
    <div className="App">
      <h1 className="title"> Sticky Notes</h1>
      <SearchBar />
      <AddNote handleNotes={handleNotes}/>
      <div>
      <h1>Tasks</h1>
      <h1>Completed Tasks</h1>
      </div>
      <NoteContainer allNotes={allNotes} deleteNote={deleteNote} completedNote={completedNote}/>
    </div>
  );
}

export default App;
