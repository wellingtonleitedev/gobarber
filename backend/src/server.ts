import express from 'express';
import 'express-async-errors';
import routes from './routes';

import 'reflect-metadata';
import './database';
import uploadConfig from './config/upload';
import errorHandling from './middlewares/errorHandling';

const app = express();

app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.use(errorHandling);

app.listen(3333, () => {
  console.log('👍, Server started');
});
