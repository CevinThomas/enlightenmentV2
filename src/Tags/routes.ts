import express from "express";
import {
  createTag,
  deleteTag,
  fetchAllTags,
  fetchSingleTag,
} from "./controller";
import { createValidator } from "express-joi-validation";
import { createTagValidator, singleTagValidator } from "./validators";

const router = express.Router();
const validator = createValidator({ passError: true });

router.post("/", validator.body(createTagValidator), createTag);
router.get("/", fetchAllTags);
router.get("/:tagId", validator.params(singleTagValidator), fetchSingleTag);
router.delete("/:tagId", validator.params(singleTagValidator), deleteTag);

export default router;
