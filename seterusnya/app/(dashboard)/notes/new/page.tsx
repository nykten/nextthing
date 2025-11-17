'use client'

import { useState } from "react";
import Card from "@/components/ui/card";

export default function NewNotePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Saving note:", { title, content });
    // Later: call API to save note
  };

  return (
    <Card title="Create New Note">
      <form onSubmit={handleSave} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border p-2 rounded h-40"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Save Note
        </button>
      </form>
    </Card>
  );
}