import createConnectionPool, { sql } from "@databases/pg";

require("dotenv").config();

export { sql };
const db = createConnectionPool();
export default db;
