import { readFile, writeFile } from "../services/file.service";
import { Note } from "../interfaces/note.interface";
import { v4 as uuidv4 } from "uuid";

const notesFile = "./data/notes.json";

export const findAll = async (): Promise<Note[]> => {
  return await readFile<Note[]>(notesFile);
};

export const findNoteById = async (id: string): Promise<Note | undefined> => {
  const notes = await findAll();
  return notes.find((note) => note.id === id);
};

export const create = async (noteData: Omit<Note, "id">): Promise<Note> => {
  const notes = await findAll();
  const newNote = { id: uuidv4(), ...noteData };
  notes.push(newNote);
  await writeFile(notesFile, notes);
  return newNote;
};

export const updateById = async (
  id: string,
  noteData: Partial<Note>
): Promise<Note | null> => {
  const notes = await findAll();
  const noteIndex = notes.findIndex((note) => note.id === id);
  if (noteIndex === -1) return null;

  const updatedNote = { ...notes[noteIndex], ...noteData };
  notes[noteIndex] = updatedNote;
  await writeFile(notesFile, notes);
  return updatedNote;
};

export const deleteById = async (id: string): Promise<boolean> => {
  const notes = await findAll();
  const noteIndex = notes.findIndex((note) => note.id === id);
  if (noteIndex === -1) return false;

  notes.splice(noteIndex, 1);
  await writeFile(notesFile, notes);
  return true;
};