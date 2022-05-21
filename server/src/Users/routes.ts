import express from "express";
import {
  createUser,
  deleteUser,
  fetchAllUsers,
  fetchSingleUser,
} from "./controller";

const router = express.Router();

router.post("/", createUser);
router.get("/", fetchAllUsers);
router.get("/:userUid", fetchSingleUser);
router.delete("/:userUid", deleteUser);

export default router;
