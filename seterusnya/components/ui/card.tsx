import React, { ReactNode } from "react";

interface CardProps {
  title: string;
  children: ReactNode;
}

export default function Card({ title, children }: CardProps) {
  return (
    <div className="bg-white shadow-md rounded p-4 w-full">
      <h3 className="font-semibold mb-2">{title}</h3>
      <div>{children}</div>
    </div>
  );
}
