"use client";
import { useState } from "react";

export default function Home() {
  const [userMessage, setUserMessage] = useState<string>("");
  const [chatResponse, setChatResponse] = useState<string>("");
  const sendMessage = async () => {
    if (!userMessage.trim()) return;

    try {
      //   console.log(userMessage);
      const response = await fetch("/api/openai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();
      if (data.reply) {
        setChatResponse(data.reply);
      } else {
        setChatResponse("No response from ChatGPT.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setChatResponse("Error: Unable to connect to the server.");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Chat with ChatGPT</h1>
      <textarea
        value={userMessage}
        onChange={(e) => setUserMessage(e.target.value)}
        placeholder="Type your message here..."
        rows={4}
        style={{ width: "100%", marginBottom: "10px" }}
      />
      <button
        onClick={sendMessage}
        style={{
          padding: "10px 20px",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Send
      </button>
      <div style={{ marginTop: "20px", fontWeight: "bold" }}>
        <p>ChatGPT Response:</p>
        <p>{chatResponse}</p>
      </div>
    </div>
  );
}
