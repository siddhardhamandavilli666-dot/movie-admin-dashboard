import { Sun, Moon } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="
        p-2 rounded-lg 
        bg-gray-200 dark:bg-slate-800 
        text-gray-700 dark:text-gray-300
        hover:bg-gray-300 dark:hover:bg-slate-700 
        transition
      "
      title="Toggle theme"
      aria-label="Toggle dark and light theme"
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
