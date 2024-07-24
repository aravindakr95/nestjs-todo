import { NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

export class AuthMiddleware implements NestMiddleware {
    use(req: any, res: any, next: NextFunction) {
        console.log('hey its auth middleware');
        req.user = {
            id: 1,
            roles: ['admin']
        }

        next();
    }
}