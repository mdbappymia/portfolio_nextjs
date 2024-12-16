"use client";
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/openai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();

      if (res.ok) {
        setReply(data.reply);
      } else {
        setReply("Error: " + data.error);
      }
    } catch (error) {
      console.error(error);
      setReply("Failed to fetch response");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Chat with Hugging Face</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          cols={50}
          placeholder="Type your message here"
        />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
      {reply && (
        <p>
          <strong>Reply:</strong> {reply}
        </p>
      )}
    </div>
  );
}
