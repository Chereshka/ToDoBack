import { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';


import { Middleware } from './middleware';


export class AuthMiddleware extends Middleware {
    protected async handle(req: Request, _res: Response, next: NextFunction): Promise<void> {

        if (!req.headers.device_id) {
            return next(createError(401, 'No `Authorization` header present')); //will change text error on the production "Authorization failed"
        }

        if (!req.body)
            req.body = {};

        req.body.deviceId = req.headers.device_id;
        next()
    }
}
