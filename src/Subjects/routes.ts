import express from "express";
import { createValidator } from "express-joi-validation";
import { subjectPayload } from "./validators";
import { createSubject, getAllSubjects } from "./controller";

const router = express.Router();
const validator = createValidator({ passError: true });

router.post("/", validator.body(subjectPayload), createSubject);
router.get("/", getAllSubjects);

export default router;
