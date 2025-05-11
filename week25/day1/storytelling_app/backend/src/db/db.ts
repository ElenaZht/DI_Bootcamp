import knex, { Knex } from 'knex';

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT } = process.env;

export const db: Knex = knex({
  client: 'pg',
  connection: {
    host: PGHOST,
    port: Number(PGPORT), // Convert PGPORT to a number
    user: PGUSER,
    database: PGDATABASE,
    password: PGPASSWORD,
    ssl: { rejectUnauthorized: false },
  },
});