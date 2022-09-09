import {Router} from 'express';
import validSchema from '../middlewares/validSchema'
import createUserSchema from '../utils/schemas/createUserSchema';
import * as authController from '../controller/authController'
import userLoginSchema from '../utils/schemas/userLoginSchema';
const authRoute = Router()

authRoute.post('/signup',validSchema(createUserSchema),authController.signup)
authRoute.post('/signin', validSchema(userLoginSchema),authController.singin)
export default authRoute