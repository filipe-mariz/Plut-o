import { Router } from 'express';
import Service from '../app/controller/crud';
import Login from '../app/controller/login';

const routes = Router();

routes.post('/', Service.index);
routes.get('/view', Service.view);
routes.get('/view/:id', Service.viewOne);
routes.delete('/delete/:id', Service.destroy);

routes.post('/user', Login.index);
routes.post('/login', Login.login)

export default routes