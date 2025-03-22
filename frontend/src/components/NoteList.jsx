import React from "react";
import { Note } from "./Note";



export const NoteList = ({notes,deleteNote}) => {
  return (
    <ul>
      {notes.sort((a,b)=> b.id - a.id).map((note) => (
        <Note note={note} deleteNote={deleteNote}/>
      ))}
    </ul>
  );
};
