import { Request, Response, NextFunction } from 'express';
import AppError from '../errors/appError';

export default function (
  err: Error,
  request: Request,
  response: Response,
  _: NextFunction,
): Response | null {
  if (err instanceof AppError) {
    return response
      .status(err.statusCode)
      .json({ status: 'error', message: err.message });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
}
