import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() =>
          setTheme(prev =>
            prev === "light" ? "dark" : "light"
          )
        }
        className="p-1 rounded-md cosmic-button hover:shadow-violet-400/50 border border-purple-500 dark:hover:bg-purple-900/90 transition-all duration-300"
        title="Toggle theme"
      >
        {theme === "light" ? (
          // <Sun className="h-5 w-5 text-yellow-500" />
          <Sun className="text-white" />
        ) : (
        // <Moon className="h-5 w-5 text-blue-400" />
          <Moon className="text-purple-500" />
        )}
      </button>
    </div>
  );
}
