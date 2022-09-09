import cors from 'cors';
import dotenv from 'dotenv';
import express, {json} from 'express';
import 'express-async-errors';
import router from './routes';
import errorHandle from './utils/errorFunctions/errorHandle';
dotenv.config()
const app = express();

app.use(cors())
app.use(json())
app.use(router)
app.use(errorHandle)
const PORT = process.env.PORT||5000
app.listen(PORT,()=> console.log((`Servidor rodando na porta ${PORT}`)));