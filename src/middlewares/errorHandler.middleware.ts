import { Request, Response, NextFunction } from "express";
import { HttpError } from "http-errors";
import logger from "../services/logger";

export const errorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err.statusCode || 500;
  const message = err.expose ? err.message : "Internal Server Error";

  logger.error("Error", { error: err.message, path: req.path, status });

  res.status(status).json({ IsSuccess: false, Error: { Message: message } });
};