import { Router } from "express";
import validSchema from "../middlewares/validSchema";
import verifyToken from "../middlewares/validToken";
import createCardSchema from "../utils/schemas/createCardSchema";
import * as cardController from '../controller/cardController'

const cardRouter = Router();

cardRouter.post('/card/create',verifyToken,validSchema(createCardSchema),cardController.createCard)

export default cardRouter