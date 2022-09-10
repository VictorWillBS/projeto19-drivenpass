import { Router } from "express";
import validSchema from "../middlewares/validSchema";
import verifyToken from "../middlewares/validToken";
import createNotesSchemas from "../utils/schemas/createNotesSchema";
import * as noteController from '../controller/notesController'
const notesRoute = Router();

notesRoute.post('/notes/create',verifyToken,validSchema(createNotesSchemas),noteController.createNotes)
notesRoute.get('/notes',verifyToken,noteController.getUserNote)
notesRoute.get('/notes/:id',verifyToken,noteController.getUserNoteById)
notesRoute.delete('/notes/:id',verifyToken,noteController.deleteNote)
export default notesRoute