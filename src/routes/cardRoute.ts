import { Router } from "express";
import verifyId from "../middlewares/verifyId";
import verifyToken from "../middlewares/validToken";
import validSchema from "../middlewares/validSchema";
import * as cardController from '../controller/cardController'
import createCardSchema from "../utils/schemas/createCardSchema";

const cardRouter = Router();

cardRouter.post('/card/create',verifyToken,validSchema(createCardSchema),cardController.createCard)
cardRouter.get('/cards',verifyToken,cardController.getCards)
cardRouter.get('/card/:id',verifyToken,verifyId,cardController.getCardById)
cardRouter.delete('/card/:id',verifyToken,verifyId,cardController.deleteCard)
export default cardRouter