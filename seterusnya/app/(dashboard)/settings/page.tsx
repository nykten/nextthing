import Card from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Settings</h2>

      <Card title="Profile">
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Save Profile
          </button>
        </form>
      </Card>

      <Card title="Account">
        <form className="flex flex-col gap-4">
          <input
            type="password"
            placeholder="New Password"
            className="border p-2 rounded"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="border p-2 rounded"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Change Password
          </button>
        </form>
      </Card>
    </div>
  );
}