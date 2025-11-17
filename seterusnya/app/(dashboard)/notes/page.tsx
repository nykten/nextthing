import Card from "@/components/ui/card";
import Link from "next/link";

export default function NotesPage() {
  // Mock notes data for now
  const notes = [
    { id: "1", title: "First Note", snippet: "This is the first note..." },
    { id: "2", title: "Second Note", snippet: "Some ideas about project..." },
    { id: "3", title: "Third Note", snippet: "Meeting notes..." },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Your Notes</h2>
        <Link
          href="/notes/new"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          New Note
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {notes.map((note) => (
          <Link
            key={note.id}
            href={`notes/${note.id}`}
            className="hover:shadow-lg transition-shadow"
          >
            <Card title={note.title}>
              <p>{note.snippet}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}