import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";

const Navbar = () => {
  const { isLoggedIn, toggleLogin } = useContext(AuthContext);

  const styles = {
    padding: "10px",
    backgroundColor: "#333",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <nav style={styles}>
      <span>Auth Context Demo</span>
      <button onClick={toggleLogin} style={{ padding: "5px 10px" }}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </nav>
  );
};

export default Navbar;
