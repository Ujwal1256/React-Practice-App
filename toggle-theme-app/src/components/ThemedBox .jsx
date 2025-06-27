import React from "react";

const ThemedBox = ({ theme, children }) => {
  const styles = {
    padding: "20px",
    margin: "10px",
    borderRadius: "8px",
    color: theme === "light" ? "#333" : "#f0f0f0",
    backgroundColor: theme === "light" ? "#ffffff" : "#333333",
    border: "1px solid",
    borderColor: theme === "light" ? "#ccc" : "#555",
    transition: "all 0.3s ease",
  };

  return <div style={styles}>{children}</div>;
};

export default ThemedBox;
