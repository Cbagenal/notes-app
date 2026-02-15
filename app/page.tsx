import { getNotes } from "@/db/queries"
import { addNoteAction } from "./actions";
import NoteList from "@/components/NoteList";

export default async function Home() {
  const notes = await getNotes();
  console.log(notes)


  return (
    <div>

      <form action={addNoteAction} className="p-3 flex flex-col gap-2">
        <div className="flex flex-col gap-4"> 
          <input type="text" name="title" placeholder="Title" className="p-2 border-2 rounded-lg" />
          <textarea name="content" placeholder="Enter..." className="p-2 border-2 rounded-lg" />
        </div>
        <button type="submit" className="bg-neutral-700 py-1 rounded-lg text-white">Submit</button>
      </form>

      <NoteList notes={notes}/>

    </div>
  )
}