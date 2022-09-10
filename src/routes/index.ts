import{Router} from 'express'
import authRoute from "./authRoute";
import credentialRoute from './credentialRoute';
import notesRoute from './notesRoute';
const router =Router();

router.use(authRoute)
router.use(credentialRoute)
router.use(notesRoute)

export default router