import {Router} from 'express';
import validSchema from '../middlewares/validSchema';
import verifyToken from '../middlewares/validToken';
import CredentialSchema from '../utils/schemas/createCredentialSchema';
import * as credentialController from '../controller/credentialsController'
import verifyId from '../middlewares/verifyId';
const credentialRoute = Router();

credentialRoute.post('/credential/create',verifyToken,validSchema(CredentialSchema),credentialController.createCredential);
credentialRoute.get('/credentials',verifyToken,credentialController.getCredentials)
credentialRoute.get('/credential/:id',verifyToken,verifyId,credentialController.getUserCredentialByID)
credentialRoute.delete('/credential/:id',verifyToken,verifyId,credentialController.deleteCredential)
export default credentialRoute