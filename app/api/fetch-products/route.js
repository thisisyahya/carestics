import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { connectToDatabase } from '../../../lib/mongodb';

export async function POST() {
  try {
    // Attempt to establish or reuse the database connection
    await connectToDatabase();

    // readyState key: 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
    const isConnected = mongoose.connection.readyState === 1;

    if (!isConnected) {
      return NextResponse.json(
        { success: false, message: 'Database failed to connect.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'MongoDB is connected successfully!',
        connectionState: mongoose.connection.readyState 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('MongoDB Connection Error:', error);

    return NextResponse.json(
      { success: false, error: 'Database connection error', details: error.message },
      { status: 500 }
    );
  }
}