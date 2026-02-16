// components/NoteItem.tsx
"use client";
import { editNoteAction } from "@/app/actions";

interface NoteItemProps {
  note: { id: number; title: string; content: string };
  isSelected: boolean;
  onToggle: () => void;
}

export default function NoteItem({
  note,
  isSelected,
  onToggle,
}: NoteItemProps) {
  return (
    <div>
      <button className="cursor-pointer" onClick={onToggle}>
        {note.title}
      </button>
      {isSelected && (
        <div>
          <p className="rounded-lg bg-neutral-700 p-2 text-white">
            {note.content}
          </p>
          <form action={editNoteAction} className="flex flex-col gap-2 p-3">
            <div className="flex flex-col gap-4">
              <input type="hidden" value={String(note.id)} name="id" />
              <input type="text" name="newTitle" placeholder="Title" className="rounded-lg border-2 p-2"/>
              <textarea name="newContent" placeholder="Enter..." className="rounded-lg border-2 p-2"/>
            </div>
            <button type="submit" className="rounded-lg bg-neutral-700 py-1 text-white">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}