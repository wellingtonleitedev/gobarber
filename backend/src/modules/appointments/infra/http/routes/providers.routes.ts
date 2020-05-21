import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../controllers/ProvidersController';

const providersController = new ProvidersController();

const providerRouter = Router();

providerRouter.use(ensureAuthenticated);

providerRouter.get('/', providersController.index);

export default providerRouter;
