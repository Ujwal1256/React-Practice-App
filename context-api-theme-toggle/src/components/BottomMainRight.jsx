import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const BottomMainRight = () => {
  const { theme } = useContext(ThemeContext);

  const styles = {
    border: "1px dashed",
    borderColor: theme === "light" ? "#000" : "#fff",
    backgroundColor: theme === "light" ? "#efefef" : "#555",
    color: theme === "light" ? "#000" : "#fff",
    padding: "20px",
    marginTop: "10px",
    transition: "all 0.3s ease",
  };

  return (
    <div style={styles}>
      <h3>BottomMainRight Component</h3>
      <p>Current Theme: <strong>{theme}</strong></p>
    </div>
  );
};

export default BottomMainRight;
