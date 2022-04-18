import createConnectionPool, { sql } from "@databases/pg";

export { sql };

const db = createConnectionPool();
export default db;
