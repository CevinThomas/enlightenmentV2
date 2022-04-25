import express from "express";
import {
  createGroupOfQuestions,
  createQuestions,
  deleteQuestion,
  fetchAllQuestions,
  fetchSingleQuestion,
} from "./controller";
import { createValidator } from "express-joi-validation";
import { groupOfQuestionsPayload, questionsPayload } from "./validators";

const router = express.Router();
const validator = createValidator({ passError: true });

router.post(
  "/",
  createQuestions,
  validator.body(questionsPayload),
  createQuestions
);
router.post(
  "/group",
  validator.body(groupOfQuestionsPayload),
  createGroupOfQuestions
);
router.get("/", fetchAllQuestions);
router.get("/", fetchSingleQuestion);
router.delete("/", deleteQuestion);

export default router;
