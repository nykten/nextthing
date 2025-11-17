import React from "react";

interface NavbarProps {
  title?: string;
}

export default function Navbar({ title }: NavbarProps) {
  return (
    <header className="w-full bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">{title || "Dashboard"}</h1>
      <div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Logout
        </button>
      </div>
    </header>
  );
}
