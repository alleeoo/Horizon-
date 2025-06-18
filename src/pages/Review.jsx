import React from "react";

const Review = () => {
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
      <h1 style={styles.title}>Write a Review</h1>
      {/* Review form will be added here */}
    </div>
  );
};

export default Review;
