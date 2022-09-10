import {Router} from 'express';
import validSchema from '../middlewares/validSchema';
import verifyToken from '../middlewares/validToken';
import CredentialSchema from '../utils/schemas/createCredentialSchema';
import * as credentialController from '../controller/credentialsController'
const credentialRoute = Router();

credentialRoute.post('/credential/create',verifyToken,validSchema(CredentialSchema),credentialController.createCredential);
credentialRoute.get('/credentials',verifyToken,credentialController.getCredentials)
credentialRoute.get('/credential/:id',verifyToken,credentialController.getUserCredentialByID)
credentialRoute.delete('/credential/:id',verifyToken,credentialController.deleteCredential)
export default credentialRoute