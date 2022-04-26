import express from "express";
import {
  createCategory,
  deleteCategory,
  fetchAllCategories,
  fetchCategory,
} from "./controller";
import { createValidator } from "express-joi-validation";
import { createCategoryValidator, singleCategory } from "./validators";

const validator = createValidator({ passError: true });

const router = express.Router();

router.post("/", validator.body(createCategoryValidator), createCategory);
router.get("/", fetchAllCategories);
router.get("/:categoryId", validator.params(singleCategory), fetchCategory);
router.delete("/:categoryId", validator.params(singleCategory), deleteCategory);

export default router;
