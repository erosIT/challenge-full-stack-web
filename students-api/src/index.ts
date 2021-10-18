import 'reflect-metadata';
import { createConnection } from 'typeorm';
import app from './app';

createConnection().then(async () => {
  app.listen(3000);
// eslint-disable-next-line no-console
}).catch((error) => console.error(error));
