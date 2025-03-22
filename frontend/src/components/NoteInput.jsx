import { useState } from "react";

export const NoteInput = () => {
  const [note, setNote] = useState("");

  const addNote=(e)=>{
    e.preventDefault()
    console.log(note);
    setNote("")
  }

  return (
    <div>
      <form onSubmit={addNote}>
        <input
          name="noteInput"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button >Add</button>
      </form>
    </div>
  );
};
