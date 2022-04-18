import express from "express";
import {
  createCategory,
  createSubject,
  deleteCategory,
  deleteSubject,
  fetchAllCategories,
  fetchAllSubjects,
  fetchCategory,
  fetchSubject,
} from "./controller";
import { createValidator } from "express-joi-validation";
import { createSubjectValidator, singleCategory } from "./validators";
const validator = createValidator({ passError: true });

const router = express.Router();

router.post("/", validator.query(createSubjectValidator), createCategory);
router.get("/", fetchAllCategories);
router.get("/:subjectId", validator.params(singleCategory), fetchCategory);
router.delete("/:subjectId", validator.params(singleCategory), deleteCategory);

export default router;
