import { Pool } from 'pg';
import { NextResponse } from 'next/server';
import 'dotenv/config'

export async function GET() {
    const pool = new Pool({
        user: "root",
        host: "localhost",
        database: "postgres",
        password: "mypassword",
        port: 8080,
    });

    const query = "SELECT * FROM customers";
    const { rows } = await pool.query(query);

    return NextResponse.json(rows);
}

