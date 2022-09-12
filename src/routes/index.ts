import{Router} from 'express'
import authRoute from "./authRoute";
import wifiRouter from './wifiRoutes';
import notesRoute from './notesRoute';
import credentialRoute from './credentialRoute';
import cardRouter from './cardRoute';
const router =Router();
router.use(authRoute)
router.use(notesRoute)
router.use(wifiRouter)
router.use(credentialRoute)
router.use(cardRouter)
export default router