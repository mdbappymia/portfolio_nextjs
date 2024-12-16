import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import axios from "axios";

// Get Hugging Face API key from environment variables
const HUGGINGFACE_API_KEY = process.env.HUGGINGFACE_API_KEY;

if (!HUGGINGFACE_API_KEY) {
  throw new Error(
    "Hugging Face API key is missing. Please add it to the environment variables."
  );
}

export async function POST(req: Request) {
  const { message } = await req.json();

  // Ensure the message exists
  if (!message) {
    return NextResponse.json({ error: "Message is required" }, { status: 400 });
  }

  try {
    // Make a POST request to Hugging Face Inference API
    const response = await axios.post(
      "https://api-inference.huggingface.co/models/gpt2", // You can replace 'gpt2' with any model name you want
      { inputs: message },
      {
        headers: {
          Authorization: `Bearer ${HUGGINGFACE_API_KEY}`,
        },
      }
    );

    // Extract the generated text from the response
    const reply = response.data[0]?.generated_text;

    if (!reply) {
      return NextResponse.json(
        { error: "No reply from Hugging Face" },
        { status: 500 }
      );
    }

    // Return the response from Hugging Face
    return NextResponse.json({ reply }, { status: 200 });
  } catch (error) {
    console.error("Error communicating with Hugging Face:", error);
    return NextResponse.json(
      { error: "Failed to fetch response from Hugging Face" },
      { status: 500 }
    );
  }
}
