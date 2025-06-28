import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";

const Main = () => {
  const { isLoggedIn } = useContext(AuthContext);

  const styles = {
    padding: "20px",
    border: "1px solid #ccc",
    marginTop: "20px",
    textAlign: "center",
  };

  return (
    <main style={styles}>
      <h2>{isLoggedIn ? "You are logged in!" : "You are not logged in."}</h2>
    </main>
  );
};

export default Main;
