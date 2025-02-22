import express, { json } from 'express';
import bodyParser from 'body-parser';
import { config } from './lib/config/envConfig';
import inputRouter from './lib/routes/inputRoutes';

const app = express();

app.use(json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', inputRouter);

app.listen(config.PORT, () => {
  console.log(`Server is running on http://localhost:${config.PORT}`);
});