import React, { useState, useEffect } from "react";
import ThemedBox from "./ThemedBox ";

const ThemeApp = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) setTheme(storedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const appStyles = {
    minHeight: "100vh",
    backgroundColor: theme === "light" ? "#f9f9f9" : "#121212",
    color: theme === "light" ? "#000" : "#fff",
    transition: "all 0.3s ease",
    padding: "40px",
  };

  return (
    <div style={appStyles}>
      <h1>Theme Toggle App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>

      <ThemedBox theme={theme}>This is ThemedBox 1</ThemedBox>
      <ThemedBox theme={theme}>This is ThemedBox 2</ThemedBox>
      <ThemedBox theme={theme}>This is ThemedBox 3</ThemedBox>
    </div>
  );
};

export default ThemeApp;
