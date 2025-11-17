'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardSidebar() {
  const pathname = usePathname();

  const links = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Notes", href: "/notes" },
    { name: "Settings", href: "/settings" },
  ];

  return (
    <aside className="w-64 h-screen bg-gray-800 text-white flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-8">Next Notes November</h2>
      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`p-2 rounded hover:bg-gray-700 ${
              pathname === link.href ? "bg-gray-700" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
