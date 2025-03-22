import { useState } from "react";
import styles from "./App.module.css";
import { NoteInput } from "./components/NoteInput";
import { NoteList } from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([
    { id: 1, title: "Grocery List", content: "Milk, Eggs, Bread" },
    { id: 2, title: "Work Tasks", content: "Finish report, send email" },
    { id: 3, title: "Ideas", content: "Start a blog, learn Docker" },
  ]);

  const addNote=(note)=>{
    setNotes((prevState)=>[...prevState,note])
  }

  const deleteNote=(id)=>{
    setNotes((prevState)=>prevState.filter((note)=>note.id != id))
  }

  return (
    <div className={styles.container}>
      <NoteInput addNote={addNote}/>
      <NoteList notes={notes} deleteNote={deleteNote}/>
    </div>
  );
}

export default App;
