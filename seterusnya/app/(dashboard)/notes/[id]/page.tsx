'use client'

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Card from "@/components/ui/card";

export default function NoteDetailPage() {
  const { id } = useParams();
  const [note, setNote] = useState({ title: "", content: "" });

  useEffect(() => {
    // Later: fetch note by id from API
    // Mock data for now
    setNote({
      title: `Note ${id}`,
      content: `This is the content of note ${id}.`,
    });
  }, [id]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updating note:", note);
    // Later: call API to update note
  };

  return (
    <Card title={`Edit Note ${id}`}>
      <form onSubmit={handleSave} className="flex flex-col gap-4">
        <input
          type="text"
          value={note.title}
          onChange={(e) => setNote({ ...note, title: e.target.value })}
          className="border p-2 rounded"
        />
        <textarea
          value={note.content}
          onChange={(e) => setNote({ ...note, content: e.target.value })}
          className="border p-2 rounded h-40"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Save Changes
        </button>
      </form>
    </Card>
  );
}