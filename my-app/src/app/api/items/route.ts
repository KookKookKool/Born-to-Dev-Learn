export async function GET() {
    const res = await fetch("https://fakestoreapi.com/products", {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "API-KEY": "fake-api-key"
      },
    });
    return Response.json ({ 
        message: 'API is working! from /api/items GET'  , 
    });
}