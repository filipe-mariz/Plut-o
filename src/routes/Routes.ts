import { Router } from 'express';
import Service from '../app/controller/crud'

const routes = Router();

routes.post('/', Service.index);
routes.get('/view', Service.view);
routes.get('/view/:id', Service.viewOne);
routes.delete('/delete/:id', Service.destroy);

export default routes