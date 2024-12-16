import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { OpenAI } from "openai"; // Updated import

// Initialize OpenAI with API Key from environment variable
const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY!,
});

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { message } = req.body;
  console.log(req.body);
  //   if (!message) {
  //     //return res.status(400).json({ error: "Message is required" });
  //     return NextResponse.json({ error: "Message is required" }, { status: 400 });
  //   }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Updated to GPT-3.5
      messages: [{ role: "user", content: message }],
    });

    const reply = response.choices[0]?.message?.content;
    // res.status(200).json({ reply });
    return NextResponse.json({ reply }, { status: 200 });
  } catch (error) {
    console.error("Error communicating with OpenAI:", error);
    // res.status(500).json({ error: "Failed to fetch response from OpenAI" });
    return NextResponse.json(
      { error: "Failed to fetch response from OpenAI" },
      { status: 500 }
    );
  }
}
