import express from 'express';
import { rateLimitMiddleware } from '../middleware/rateLimitMiddleware';
import inputController from '../controller/inputController';

const InputCOntroller = new inputController();

const inputRouter = express.Router();

inputRouter.get('/getResponse', rateLimitMiddleware, (req, res, next) => InputCOntroller.getResponse(req, res, next));

export default inputRouter;