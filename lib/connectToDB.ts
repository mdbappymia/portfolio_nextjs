// lib/mongodb.ts
import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI as string;
const MONGODB_URI =
  "mongodb+srv://mdbappymia:101202mbm@bappy.3hrifbq.mongodb.net/";

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable in .env.local"
  );
}

// Function to connect to the MongoDB database
export async function connectToDatabase() {
  if (mongoose.connections[0].readyState) {
    // Return early if already connected to MongoDB
    return mongoose.connections[0];
  }

  // Establish a new connection if not already connected
  return mongoose.connect(MONGODB_URI);
}
