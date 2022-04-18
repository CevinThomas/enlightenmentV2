import express from "express";
import {
  createQuestions,
  deleteQuestion,
  fetchAllQuestions,
  fetchSingleQuestion,
} from "./controller";

const router = express.Router();

router.post("/", createQuestions);
router.get("/", fetchAllQuestions);
router.get("/", fetchSingleQuestion);
router.delete("/", deleteQuestion);

export default router;
