import { Database, aql } from "arangojs";

export const db = new Database({
  url: process.env.DB_URL,
  databaseName: process.env.DB_NAME,
  auth: {
    username: process.env.DB_USERNAME || "",
    password: process.env.DB_PASSWORD,
  }
});