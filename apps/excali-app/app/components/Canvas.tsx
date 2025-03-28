


import { useState } from "react";
import { Button } from "@repo/ui/button";
import { PanelLeft, Save, Upload, Undo, Redo, Square, Circle } from "lucide-react";

export default function ExcalidrawDashboard() {
  const [selectedTool, setSelectedTool] = useState("select");

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <aside className="w-20 bg-gray-100 p-4 flex flex-col gap-4 shadow-md">
        <Button onClick={() => setSelectedTool("select")} variant={selectedTool === "select" ? "secondary" : "ghost"}>
          <PanelLeft size={20} />
        </Button>
        <Button onClick={() => setSelectedTool("square")} variant={selectedTool === "square" ? "secondary" : "ghost"}>
          <Square size={20} />
        </Button>
        <Button onClick={() => setSelectedTool("circle")} variant={selectedTool === "circle" ? "secondary" : "ghost"}>
          <Circle size={20} />
        </Button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <nav className="h-14 bg-white shadow flex items-center justify-between px-4">
          <div className="flex gap-2">
            <Button variant="ghost">
              <Save size={20} />
            </Button>
            <Button variant="ghost">
              <Upload size={20} />
            </Button>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost">
              <Undo size={20} />
            </Button>
            <Button variant="ghost">
              <Redo size={20} />
            </Button>
          </div>
        </nav>

        {/* Drawing Canvas */}
        <div className="flex-1 bg-gray-50 flex items-center justify-center">
          <p className="text-gray-400">Canvas Area (To Be Implemented)</p>
        </div>
      </main>
    </div>
  );
}
