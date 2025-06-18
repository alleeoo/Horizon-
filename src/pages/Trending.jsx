import React from "react";
import MovieCard from "../components/MovieCard";
import { trending } from "../data/movies";

const Trending = () => {
  const styles = {
    container: {
      padding: "2rem",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    title: {
      textAlign: "center",
      marginBottom: "2rem",
      color: "#1a1a1a",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      gap: "2rem",
      padding: "1rem",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Trending Now</h1>
      <div style={styles.grid}>
        {trending.map((item) => (
          <MovieCard
            key={item.id}
            title={item.title}
            image={item.image}
            rating={item.rating}
            year={item.year}
            genre={item.genre}
          />
        ))}
      </div>
    </div>
  );
};

export default Trending;
