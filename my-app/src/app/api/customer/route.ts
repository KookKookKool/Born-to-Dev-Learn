
import { Pool } from "pg";
import { NextResponse } from "next/server";

const pool = new Pool({
    user: "root",
    host: "postgredb",
    database: "postgres",
    password: "root",
    port: 5433, // Use the port you mapped in Docker Compose
  });

export async function GET() {
    const query = "SELECT * FROM customers";
    const { rows } = await pool.query(query);
    return NextResponse.json(rows);
}


//MongoDB

// import { MongoClient } from "mongodb";
// import 'dotenv/config'

// export async function GET() {
//    const client = await MongoClient.connect(process.env.MONGODB_URI);
//    const db = client.db("sample_mflix"); //ใช้ชื่อในการเข้าถึง
//    const userCollection = db.collection("users"); //ไฟล์รองที่ต้องการเข้าถึง

//    const users = await userCollection.find({}).toArray();

//     return Response.json({ 
//        users
//    });
// }

//ต้องเพิ่ม ip ใน Network Access in MongoDB