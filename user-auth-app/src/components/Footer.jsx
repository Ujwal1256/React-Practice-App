import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";

const Footer = () => {
  const { isLoggedIn } = useContext(AuthContext);

  const styles = {
    padding: "10px",
    borderTop: "1px solid #ccc",
    marginTop: "20px",
    textAlign: "center",
    fontStyle: "italic",
  };

  return (
    <footer style={styles}>
      {isLoggedIn ? "Welcome, User" : "Please log in"}
    </footer>
  );
};

export default Footer;
