
export async function GET() {
    return Response.json ({ 
        message: 'API is working! from /api/users GET'  , 
    });
}

export async function POST() {
    return Response.json ({ 
        message: 'API is working! from /api/users POST'  , 
    });
}

export async function PUT() {
    return Response.json ({ 
        message: 'API is working! from /api/users PUT'  , 
    });
}

export async function DELETE() {
    return Response.json ({ 
        message: 'API is working! from /api/users DELETE'  , 
    });
}
