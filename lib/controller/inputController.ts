import express, { NextFunction } from 'express';
import { sendResponseGet } from '../error/globalSuccessHandler';
import { sendErrorProd } from '../error/globalErrorHandler';
import { getResponseService } from '../service/inputService';
export default class inputController {
    constructor() {

    }

    async getResponse(req: express.Request, res: express.Response, next: NextFunction) {
        try{
            const input = req.body.input;
            const response = await getResponseService(input);
            sendResponseGet(200, response, res);
        } catch(err) {
            sendErrorProd(err, req, res);
        }
    }
};