// components/NoteList.tsx
"use client";
import { useState } from "react";
import NoteItem from "./NoteItem";

interface Note {
  id: number;
  title: string;
  content: string;
}

export default function NoteList({ notes }: { notes: Note[] }) {
  const [selectedNote, setSelectedNote] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setSelectedNote((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex flex-col gap-4 px-3">
      <p className="text-xl">Select a note</p>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} isSelected={selectedNote === note.id} onToggle={() => handleToggle(note.id)}/>
      ))}
    </div>
  );
}