import { Response } from "express";

export const sendSuccess = <T>(
  res: Response,
  data: T,
  statusCode: number = 200
) => {
  res.status(statusCode).json({ IsSuccess: true, Data: data });
};

export const sendError = (
  res: Response,
  message: string,
  statusCode: number = 400
) => {
  res
    .status(statusCode)
    .json({ IsSuccess: false, Error: { Message: message } });
};
