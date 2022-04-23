import express from "express";
import {
  createLicenceGroup,
  deleteLicenceGroup,
  fetchAllLicenceGroups,
  fetchSingleLicenceGroup,
  updateLicenceGroup,
} from "./controller";
import { createValidator } from "express-joi-validation";
import { insertLicenceValidators } from "./validators";

const router = express.Router();
const validator = createValidator({ passError: true });

router.post("/", validator.body(insertLicenceValidators), createLicenceGroup);
router.get("/", fetchAllLicenceGroups);
router.get("/:licenceGroupId", fetchSingleLicenceGroup);
router.patch("/:licenceGroupId", updateLicenceGroup);
router.delete("/:licenceGroupId", deleteLicenceGroup);

export default router;
