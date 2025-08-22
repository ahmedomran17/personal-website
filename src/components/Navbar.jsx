// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();

  return (
         <nav className="absolute top-0 left-0 right-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Brand */}
        <div className="text-2xl font-bold tracking-tight text-black dark:text-white transition-colors duration-200">
          Ahmed Omran
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-6 list-none">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg border border-black dark:border-white transition-all duration-200 ease-out
                  ${
                    isActive
                      ? "bg-black dark:bg-white text-white dark:text-black shadow-md"
                      : "bg-transparent text-black dark:text-white hover:scale-105 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black hover:shadow-md"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg border border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-200 ease-out"
          aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
        >
          {isDark ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}
