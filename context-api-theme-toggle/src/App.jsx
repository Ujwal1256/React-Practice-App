import React, { useContext } from "react";
import { ThemeContext, ThemeProvider } from "./ThemeContext";
import MiddleMain from "./components/MiddleMain";

function AppContent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const appStyles = {
    backgroundColor: theme === "light" ? "#ffffff" : "#333333",
    color: theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    padding: "20px",
    transition: "all 0.3s ease",
  };

  return (
    <div style={appStyles}>
      <h1>Context API Theme Toggle Demo</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      < MiddleMain/>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
