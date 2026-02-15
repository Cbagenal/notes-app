'use client'
import { useState } from "react"

interface Note {
  id: number
  title: String,
  content: String
}

export default function NoteList({ notes }: {notes: Note[]}){
  const[selectedNote, setSelectedNote] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setSelectedNote(id)
  }

  return(
    <div className="flex flex-col gap-4 px-3">
      <p className="text-xl">Select a note</p>
      {notes.map((note) => (
        <div key={note.id}>
          <button className="cursor-pointer" onClick={() => handleClick(note.id)}>{note.title}</button>
          {selectedNote === note.id && <p>{note.content}</p>}
        </div>
      ))}
    </div>
  )
}