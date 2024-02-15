import { Router } from "express";
import * as NoteController from "../controllers/note.controller";

const router = Router();

/**
 * @openapi
 * /notes:
 *   get:
 *     summary: Retrieve all notes
 *     description: Retrieve a list of all notes from the database.
 *     responses:
 *       200:
 *         description: A list of notes.
 *       500:
 *         description: Internal server error.
 */
router.get("/", NoteController.getAllNotes);

/**
 * @openapi
 * /notes/{id}:
 *   get:
 *     summary: Retrieve a single note
 *     description: Retrieve a single note based on its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the note to retrieve.
 *     responses:
 *       200:
 *         description: A single note.
 *       404:
 *         description: Note not found.
 */
router.get("/:id", NoteController.getNoteById);

/**
 * @openapi
 * /notes:
 *   post:
 *     summary: Create a new note
 *     description: Create a new note with the provided data.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               body:
 *                 type: string
 *     responses:
 *       201:
 *         description: The created note.
 *         content:
 *           application/json:
 *             example:
 *               id: "1"
 *               title: "Example Note"
 *               body: "This is an example note."
 *       400:
 *         description: Invalid input data.
 */
router.post("/", NoteController.createNote);

/**
 * @openapi
 * /notes/{id}:
 *   put:
 *     summary: Update a note
 *     description: Update an existing note with the provided data.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the note to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               body:
 *                 type: string
 *     responses:
 *       200:
 *         description: The updated note.
 *       400:
 *         description: Invalid input data.
 *       404:
 *         description: Note not found.
 */
router.put("/:id", NoteController.updateNote);

/**
 * @openapi
 * /notes/{id}:
 *   delete:
 *     summary: Delete a note
 *     description: Delete an existing note based on its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the note to delete.
 *     responses:
 *       200:
 *         description: Note successfully deleted.
 *       404:
 *         description: Note not found.
 */
router.delete("/:id", NoteController.deleteNote);

export default router;
