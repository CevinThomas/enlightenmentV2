import { NextFunction, Request, Response } from "express";
import {
  deleteLicenceGroupRep,
  getAllLicenceGroups,
  getSingleLicenceGroup,
  getUsersByLicenceGroupRep,
  insertLicenceGroup,
  updateLicenceGroupRep,
} from "./repository";

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
    res.status(200).send(await getAllLicenceGroups());
  } catch (e) {
    res.status(500).send(e);
  }
};

export const fetchSingleLicenceGroup = async (req: Request, res: Response) => {
  try {
    const { licenceGroupId } = req.params;
    //TODO: Remove The query in this route
    const { withUsers } = req.query;
    res
      .status(200)
      .send(await getSingleLicenceGroup(licenceGroupId, Boolean(withUsers)));
  } catch (e) {
    res.status(500).send(e);
  }
};

export const deleteLicenceGroup = async (req: Request, res: Response) => {
  try {
    const { licenceGroupId } = req.params;
    await deleteLicenceGroupRep(licenceGroupId);
    res.status(200).send();
  } catch (e) {
    res.status(500).send(e);
  }
};

export const updateLicenceGroup = async (req: Request, res: Response) => {
  try {
    const { licenceGroupId } = req.params;
    await updateLicenceGroupRep(req.body, licenceGroupId);
    res.status(200).send();
  } catch (e) {
    res.status(500).send(e);
  }
};

export const getUsersByLicenceGroup = async (req: Request, res: Response) => {
  try {
    const { licenceGroupId } = req.params;
    res.status(200).send(await getUsersByLicenceGroupRep(licenceGroupId));
  } catch (e) {
    res.status(500).send();
  }
};
