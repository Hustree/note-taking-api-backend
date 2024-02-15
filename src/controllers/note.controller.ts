import { Request, Response } from "express";
import * as NoteModel from "../models/note.model";
import { NoteValidationSchema } from "../validators/note.validator";
import { sendSuccess, sendError } from "../utils/responses";

export const getAllNotes = async (req: Request, res: Response) => {
  const notes = await NoteModel.findAll();
  sendSuccess(res, notes);
};

export const getNoteById = async (req: Request, res: Response) => {
  const note = await NoteModel.findNoteById(req.params.id);
  if (!note) {
    return sendError(res, "Note not found", 404);
  }
  sendSuccess(res, note);
};

export const createNote = async (req: Request, res: Response) => {
  const { error } = NoteValidationSchema.validate(req.body);
  if (error) return sendError(res, error.message, 400);

  const note = await NoteModel.create(req.body);
  sendSuccess(res, note, 201);
};

export const updateNote = async (req: Request, res: Response) => {
  const { error } = NoteValidationSchema.validate(req.body);
  if (error) return sendError(res, error.message, 400);

  const updatedNote = await NoteModel.updateById(req.params.id, req.body);
  if (!updatedNote) {
    return sendError(res, "Note not found", 404);
  }
  sendSuccess(res, updatedNote);
};

export const deleteNote = async (req: Request, res: Response) => {
  const isDeleted = await NoteModel.deleteById(req.params.id);
  if (!isDeleted) {
    return sendError(res, "Note not found", 404);
  }
  sendSuccess(res, { message: "Note successfully deleted" }, 200);
};
