'use server'

import { addNote } from "@/db/queries";

export async function addNoteAction(formData: FormData){
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  if (!formData || !content){
    throw new Error('Requires title and content')
  }

  await addNote(title, content);
}