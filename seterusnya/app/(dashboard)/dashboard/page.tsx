import Card from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card title="Total Notes">
        <p className="text-2xl font-bold">12</p>
      </Card>
      <Card title="Recent Activity">
        <ul className="list-disc pl-5">
          <li>Created a new note</li>
          <li>Edited "Project Ideas"</li>
          <li>Deleted a sample note</li>
        </ul>
      </Card>
      <Card title="Stats">
        <p>Notes created this week: 5</p>
      </Card>
    </div>
  );
}