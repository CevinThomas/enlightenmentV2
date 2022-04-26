import express from "express";
import {
  createQuestions,
  deleteQuestion,
  fetchAllQuestions,
  fetchSingleQuestion,
  getAllQuestionsPerLicence,
} from "./controller";
import { createValidator } from "express-joi-validation";
import { questionsPayload } from "./validators";
import Joi from "joi";

const router = express.Router();
const validator = createValidator({ passError: true });

router.post(
  "/",
  createQuestions,
  validator.body(questionsPayload),
  createQuestions
);
router.get(
  "/:licenceId",
  validator.params(
    Joi.object({
      licenceId: Joi.string().required().min(36).max(36),
    })
  ),
  getAllQuestionsPerLicence
);
router.get("/", fetchAllQuestions);
router.get("/", fetchSingleQuestion);
router.delete("/", deleteQuestion);

export default router;
