import express from 'express';
import { resolve } from 'path';
import sequelize from './db.js';
import { config } from 'dotenv';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import router from './routes/routes.js';
import errorHandler from './middleware/ErrorHandlingMiddleware.js';
import path from 'node:path';
import { currDir } from './utils/path.js';

config({ path: resolve(process.cwd(), '.env') });

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(currDir(import.meta.url), 'static')));
app.use(fileUpload({}));
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
