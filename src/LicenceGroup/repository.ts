import db from "../../db/database";
import { sql } from "@databases/pg";
import { LicenceGroupPayload } from "./types";

export const insertLicenceGroup = async ({
  companyName,
  companyLogo,
}: LicenceGroupPayload) => {
  try {
    await db.query(sql`
    INSERT INTO licence_group (licence_id, company_name, logo_url) VALUES (gen_random_uuid() ,${companyName}, ${companyLogo})
`);
  } catch (e) {}
};

export const updateLicenceGroup = () => {};

export const getAllLicenceGroups = () => {};
