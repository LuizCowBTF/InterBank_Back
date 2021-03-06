import express from 'express';
import 'express-async-errors';
import { createConnection } from 'typeorm';
import routes from './routes';

import { globalErrors } from './middlewares/globalErrors';

createConnection().then(connection => {
  const app = express();
  const PORT = 3333;

  app.use(express.json())
  app.use(routes)
  app.use(globalErrors)

  app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.log("Não foi possível conectar ao banco de dados!", error)
});
