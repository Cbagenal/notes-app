import { db } from ".";
import { notesTable } from "./schema";

export async function getNotes(){
  return db.select().from(notesTable)
}

export async function addNote(title: string, content: string){
    await db.insert(notesTable).values({title, content})
}