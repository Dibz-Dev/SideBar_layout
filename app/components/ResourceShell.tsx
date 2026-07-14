"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";

const ResourceShell = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden w-full">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className="grow overflow-auto">{children}</main>
    </div>
  );
};
export default ResourceShell;
