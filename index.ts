import express, { json } from 'express';
import bodyParser from 'body-parser';
import { config } from './lib/config/envConfig';

const app = express();

app.use(json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(config.PORT, () => {
  console.log(`Server is running on http://localhost:${config.PORT}`);
});