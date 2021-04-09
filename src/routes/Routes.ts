import { Router } from 'express';
import Service from '../app/controller/index'

const routes = Router();

routes.post('/', Service.index);

export default routes