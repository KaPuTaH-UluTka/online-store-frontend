import express from 'express';
import { resolve } from 'path';
import sequelize from './db.js';
import { config } from 'dotenv';
import cors from 'cors';
import router from './routes/routes.js';
import errorHandler from './middleware/ErrorHandlingMiddleware.js';

config({ path: resolve(process.cwd(), '.env') });

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

(async () => await start())();
