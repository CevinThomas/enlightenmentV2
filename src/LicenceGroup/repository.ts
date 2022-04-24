import db from "../../db/database";
import { sql } from "@databases/pg";
import { LicenceGroupPayload } from "./types";

export const insertLicenceGroup = async ({
  companyName,
  logoUrl,
}: LicenceGroupPayload) => {
  try {
    await db.query(sql`
    INSERT INTO licence_group (licence_id, company_name, logo_url) VALUES (gen_random_uuid() ,${companyName}, ${logoUrl})
`);
  } catch (e) {
    throw new Error("Insert licence");
  }
};

export const updateLicenceGroupRep = async (
  payload: LicenceGroupPayload,
  licenceGroupId: string
) => {
  try {
    await db.query(sql`UPDATE licence_group 
        SET company_name = ${payload.companyName},
            logo_url = ${payload.logoUrl},
            status = ${payload.status}
        WHERE licence_id = ${licenceGroupId}
    `);
  } catch (e) {
    console.log(e);
    throw new Error("Update License");
  }
};

export const getAllLicenceGroups = async () => {
  try {
    return await db.query(sql`
        SELECT licence_id, company_name, logo_url
          FROM licence_group
`);
  } catch (e) {
    throw new Error("Get All licence");
  }
};

export const getSingleLicenceGroup = async (
  licenceGroupId: string,
  withUsers: boolean
) => {
  try {
    let selectFields = sql`lg.company_name, lg.logo_url`;

    if (withUsers) {
      selectFields = sql`${selectFields}, array_agg(u) AS users`;
    }

    return await db.query(sql`
    SELECT ${selectFields} 
    FROM licence_group lg 
    ${
      withUsers
        ? sql`LEFT JOIN users u ON u.licence_id = ${licenceGroupId} `
        : sql``
    }
    ${withUsers ? sql`GROUP BY lg.company_name, lg.logo_url` : sql``}
`);
  } catch (e) {
    console.log(e);
    throw new Error("Get Single Licence");
  }
};

export const deleteLicenceGroupRep = async (licenceGroupId: string) => {
  try {
    await db.tx(async (db) => {
      await db.query(sql`
        UPDATE users
          SET licence_id = NULL,
                user_role = 'standard'
        WHERE licence_id = ${licenceGroupId}
`);

      await db.query(sql`
    DELETE FROM licence_group 
    WHERE licence_id = ${licenceGroupId}
`);
    });
  } catch (e) {
    console.warn(e);
    throw new Error("Deleting");
  }
};
