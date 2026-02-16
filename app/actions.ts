'use server'

import { addNote, editNote } from "@/db/queries";
import { revalidatePath } from "next/cache";

export async function addNoteAction(formData: FormData){
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  if (!title || !content){
    throw new Error('Requires title and content')
  }

  await addNote(title, content);
  revalidatePath("/")
}

export async function editNoteAction(formData: FormData){
  const id = Number(formData.get('id'));
  const newTitle = formData.get('newTitle') as string;
  const newContent = formData.get('newContent') as string;

  console.log(id, newTitle, newContent)

  await editNote(id, newTitle, newContent)

  revalidatePath("/")
}