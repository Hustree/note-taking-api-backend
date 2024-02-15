import sanitizeHtml from "sanitize-html";
import { NextFunction, Request, Response } from "express";

export const sanitizeInput = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const sanitizeField = (field: string) =>
    sanitizeHtml(field, { allowedTags: [], allowedAttributes: {} });

  if (req.body) {
    Object.keys(req.body).forEach((key) => {
      if (typeof req.body[key] === "string") {
        req.body[key] = sanitizeField(req.body[key]);
      }
    });
  }

  next();
};