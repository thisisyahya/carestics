import { NextResponse } from 'next/server';
// 1. Import your database connection function
import { connectToDatabase } from '@/lib/mongodb'; 

// 2. Import your Mongoose model (adjust the path to where your model is saved)
// import Product from '@/models/Product'; 

export async function POST(request) {
  try {
    const body = await request.json();
    const { category, limit } = body;

    // Validate the parameters
    if (!category || limit === undefined) {
      return NextResponse.json(
        { error: 'Missing required parameters: "category" or "limit"' },
        { status: 400 }
      );
    }

    // 3. Connect to MongoDB using your controller
    await connectToDatabase();

    // 4. Query the database using your Mongoose model
    // This finds products matching the category and limits the number of results
    // const products = await Product.find({ category }).limit(limit);
    
    // --- Remove this dummy data once your model is imported ---
    const products = [
      { id: '1', name: 'Sample Product from DB', category },
    ];
    // ----------------------------------------------------------

    return NextResponse.json(
      { success: true, data: products }, 
      { status: 200 }
    );

  } catch (error) {
    console.error('Error fetching products:', error);
    
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}