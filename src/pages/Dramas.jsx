import React from "react";
import MovieCard from "../components/MovieCard";
import { dramas } from "../data/movies";

const Dramas = () => {
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
      <h1 style={styles.title}>Dramas</h1>
      <div style={styles.grid}>
        {dramas.map((drama) => (
          <MovieCard
            key={drama.id}
            title={drama.title}
            image={drama.image}
            rating={drama.rating}
            year={drama.year}
            genre={drama.genre}
          />
        ))}
      </div>
    </div>
  );
};

export default Dramas;
