import { Request, Response } from "express";
import {
  createUserRep,
  deleteUserRep,
  fetchAllUsersRep,
  fetchSingleUserRep,
} from "./repository";

export const createUser = async (req: Request, res: Response) => {
  try {
    await createUserRep();
  } catch (e) {}
};

export const fetchAllUsers = async (req: Request, res: Response) => {
  try {
    await fetchAllUsersRep();
  } catch (e) {}
};

export const fetchSingleUser = async (req: Request, res: Response) => {
  try {
    await fetchSingleUserRep();
  } catch (e) {}
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    await deleteUserRep();
  } catch (e) {}
};
