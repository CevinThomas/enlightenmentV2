import { NextFunction, Request, Response } from "express";
import { insertLicenceGroup } from "./repository";

export const createLicenceGroup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await insertLicenceGroup(req.body);
    res.status(204).send();
  } catch (e) {
    next(e);
    res.status(400).send("HELLO");
  }
};

export const fetchAllLicenceGroups = async (req: Request, res: Response) => {
  try {
  } catch (e) {}
};

export const fetchSingleLicenceGroup = async (req: Request, res: Response) => {
  try {
  } catch (e) {}
};

export const deleteLicenceGroup = async (req: Request, res: Response) => {
  try {
  } catch (e) {}
};

export const updateLicenceGroup = async (req: Request, res: Response) => {
  try {
  } catch (e) {}
};
