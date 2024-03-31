import { NextRequest, NextResponse } from "next/server";
import products from "../..//../../products.json";
import { writeFileSync } from "fs";

export async function GET() {
    // Mocking up product data  
    return Response.json({
      products: products,
    });
  }

  export async function POST( request: NextRequest) {
    const body = await request.json();
    products.push(body);
    writeFileSync("./products.json", JSON.stringify(products, null, 2), "utf-8" );
    
    return NextResponse.json({
      message: "Product created successfully", body
    })
};

export async function PUT( request: NextRequest) {
    const body = await request.json();
    products.push(body);
    writeFileSync("./products.json", JSON.stringify(products, null, 2), "utf-8" );
    
    return NextResponse.json({
      message: "Product updated successfully", body
    })
};

export async function DELETE( request: NextRequest) {
    const body = await request.json();
    products.push(body);
    writeFileSync("./products.json", JSON.stringify(products, null, 2), "utf-8" );
    
    return NextResponse.json({
      message: "Product deleted successfully", body
    })
};

  