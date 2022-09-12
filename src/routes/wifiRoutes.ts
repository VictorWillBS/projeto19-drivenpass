import { Router } from "express";
import verifyToken from "../middlewares/validToken";
import validSchema from "../middlewares/validSchema";
import createWifiSchema from "../utils/schemas/createWifiSchema";
import * as wifiController from "../controller/wifiController"
const wifiRouter = Router();

wifiRouter.post('/wifi/create',verifyToken,validSchema(createWifiSchema), wifiController.createWifi)
wifiRouter.get('/wifi',verifyToken,wifiController.getWifis)
wifiRouter.get('/wifi/:id',verifyToken,wifiController.getWifiById)
wifiRouter.delete('/wifi/:id',verifyToken,wifiController.deleteWifi)
export default wifiRouter