import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import uploadConfig from '@config/upload';
import routes from './routes';

import '@shared/infra/typeorm';
import '@shared/containers';

import errorHandling from './middlewares/errorHandling';

const app = express();

app.use(express.json());
app.use('/files', express.static(uploadConfig.uploadFolder));
app.use(routes);

app.use(errorHandling);

app.listen(3333, () => {
  console.log('👍, Server started');
});
