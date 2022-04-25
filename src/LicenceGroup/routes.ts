import express from "express";
import {
  createLicenceGroup,
  deleteLicenceGroup,
  fetchAllLicenceGroups,
  fetchSingleLicenceGroup,
  updateLicenceGroup,
} from "./controller";
import { createValidator } from "express-joi-validation";
import {
  fetchLicenceValidator,
  licencePayloadValidator,
  updateLicenceValidator,
  withUsersQuery,
} from "./validators";

const router = express.Router();
const validator = createValidator({ passError: true });

router.post("/", validator.body(licencePayloadValidator), createLicenceGroup);
router.get("/", validator.query(withUsersQuery), fetchAllLicenceGroups);
router.get("/:licenceGroupId/users", validator.params(fetchLicenceValidator));
router.get(
  "/:licenceGroupId",
  validator.params(fetchLicenceValidator),
  fetchSingleLicenceGroup
);
router.patch(
  "/:licenceGroupId",
  validator.body(updateLicenceValidator),
  updateLicenceGroup
);
router.delete("/:licenceGroupId", deleteLicenceGroup);

//TODO: Get users per licenceGroup?
export default router;