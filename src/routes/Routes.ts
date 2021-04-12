import { Router } from 'express';
import Service from '../app/controller/crud';
import Login from '../app/controller/login';
import authMiddleware from '../app/middleware/authMiddleware';

const routes = Router();

routes.post('/user', Login.index);
routes.post('/login', Login.login);

routes.post('/', Service.index);
routes.get('/view', authMiddleware, Service.view);
routes.get('/view/:id', authMiddleware, Service.viewOne);
routes.delete('/delete/:id', authMiddleware, Service.destroy);

export default routes
