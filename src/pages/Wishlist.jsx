import React from "react";

const Wishlist = () => {
  const styles = {
    container: {
      padding: "2rem 0",
    },
    title: {
      textAlign: "center",
      marginBottom: "2rem",
      color: "#1a1a1a",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Your Wishlist</h1>
      {/* Wishlist content will be added here */}
    </div>
  );
};

export default Wishlist;
