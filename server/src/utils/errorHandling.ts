import { NextFunction, Request, Response } from "express";
import { ValidationError } from "joi";

const errorHandler = async (
  err: Error | any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err.error instanceof ValidationError) {
    res.status(400).send({
      message: `${err.error.message}`,
      type: `${err.type}`,
    });
    console.log("VALIDATION ERROR");
  }

  res.status(500).send(err.message);
};

export default errorHandler;
