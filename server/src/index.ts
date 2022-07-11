import express from 'express';
import { resolve } from 'path';
import sequelize from './db.js';
import { config } from 'dotenv';
import models from './models/models';
import cors from 'cors';

config({ path: resolve(process.cwd(), '.env') });

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors);
app.use(express.json);
app.get('/', (req, res) => {
  res.status(200).json({ message: 'good' });
});

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start();
