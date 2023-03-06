import { NextFunction, Request, Response } from "express";
import { HttpStatusCode } from "./HttpStatusCode.Enum";

export interface IAppController {
  fileanalyse(req: Request, res: Response, next: NextFunction): Promise<void>;
}

export class AppController implements IAppController {
  public async fileanalyse(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const file = req.file;

    if (!file) {
      const errorResponse = {
        error: "No file uploaded",
      };
      res.status(HttpStatusCode.BadRequest).send(errorResponse);
      return next();
    }

    const okResponse = {
      name: file.originalname,
      type: file.mimetype,
      size: file.size,
    };
    res.status(HttpStatusCode.OK).send(okResponse);
  }
}
