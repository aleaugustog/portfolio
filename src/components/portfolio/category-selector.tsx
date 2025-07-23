"use client";

import cn from "@/util/cn";
import { useState } from "react";

export default function CategorySelector() {
  const [selected, setSelected] = useState("All");
  return (
    <div className="mx-auto max-w-4xl flex justify-around mb-16">
      {[
        "All",
        "Web App",
        "Frontend",
        "Backend",
        "Data Viz",
        "Data Engineering",
        "Analytics",
      ].map((category) => (
        <button
          key={category}
          className={cn(
            "cursor-pointer text-lg text-lime-200 px-4 py-2 rounded hover:bg-lime-900 hover:text-lime-50 hover:underline transition-colors duration-300 font-medium underline-offset-4",
            {
              "bg-lime-700 text-white hover:bg-lime-700 shadow":
                selected === category,
            }
          )}
          onClick={() => setSelected(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
