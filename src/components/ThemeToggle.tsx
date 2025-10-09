import { useTheme } from "../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  const getIcon = () => {
    if (theme === "system") {
      return "🖥️";
    }
    return resolvedTheme === "dark" ? "🌙" : "☀️";
  };

  const getLabel = () => {
    if (theme === "system") {
      return "System";
    }
    return resolvedTheme === "dark" ? "Dark" : "Light";
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      title={`Current: ${getLabel()}. Click to cycle through themes.`}
    >
      <span className="text-lg">{getIcon()}</span>
      <span className="text-sm font-medium hidden sm:inline">{getLabel()}</span>
    </button>
  );
};

export default ThemeToggle;
