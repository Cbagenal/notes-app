import { eq } from "drizzle-orm";
import { db } from ".";
import { notesTable } from "./schema";

export async function getNotes(){
  return db.select().from(notesTable).orderBy(notesTable.id)
}

export async function addNote(title: string, content: string){
    await db.insert(notesTable).values({title, content})
}

export async function editNote(id: number, newTitle: string, newContent: string){
    await db.update(notesTable).set({title: newTitle, content: newContent}).where(eq(notesTable.id, id))
}