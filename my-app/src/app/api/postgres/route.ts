import { Pool } from "pg";
import { NextResponse } from "next/server";

// GET ALL : Read
export async function GET() {
  const pool = new Pool({
    user: "root",
    host: "postgredb",
    database: "postgres",
    password: "root",
    port: 5433, // Use the port you mapped in Docker Compose
  });

  const query = "SELECT * FROM customers";
  const { rows } = await pool.query(query);
  return NextResponse.json(rows);
}