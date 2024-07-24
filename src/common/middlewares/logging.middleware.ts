import { NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

export class LoggingMiddleware implements NestMiddleware {
    use(req: any, res: any, next: NextFunction) {
        console.log('Hey its hit my logging middleware');
        next();
    }
}