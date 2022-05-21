import express from "express";
import { createValidator } from "express-joi-validation";
import { questionsPayload } from "../Questions/validators";
import { createQuestions } from "../Questions/controller";

const router = express.Router();
const validator = createValidator({ passError: true });

router.post("/", validator.body(questionsPayload), createQuestions);

export default router;
