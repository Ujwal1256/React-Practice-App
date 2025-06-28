import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import BottomMainRight from "./BottomMainRight";

const MiddleMain = () => {
  const { theme } = useContext(ThemeContext);

  const styles = {
    border: "1px solid",
    borderColor: theme === "light" ? "#000" : "#fff",
    backgroundColor: theme === "light" ? "#f9f9f9" : "#444",
    color: theme === "light" ? "#000" : "#fff",
    padding: "20px",
    marginTop: "20px",
    transition: "all 0.3s ease",
  };

  return (
    <div style={styles}>
      <h2>MiddleMain Component</h2>
      <BottomMainRight />
    </div>
  );
};

export default MiddleMain;
