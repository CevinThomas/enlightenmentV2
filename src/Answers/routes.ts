import express from "express";
import { addAnswer } from "./controller";
import { createValidator } from "express-joi-validation";
import { addAnswerPayload } from "./validators";

const router = express.Router();
const validator = createValidator({ passError: true });

router.post("/", validator.body(addAnswerPayload), addAnswer);

export default router;
