import {Router} from 'express';
import validSchema from '../middlewares/validSchema';
import verifyToken from '../middlewares/validToken';
import CredentialSchema from '../utils/schemas/createCredentialSchema';
import * as credentialController from '../controller/credentialsController'
const credentialRoute = Router();

credentialRoute.post('/create/credential',verifyToken,validSchema(CredentialSchema),credentialController.createCredential);

export default credentialRoute