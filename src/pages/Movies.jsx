import React from "react";
import MovieCard from "../components/MovieCard";
import { movies } from "../data/movies";

const Movies = () => {
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
      <h1 style={styles.title}>Movies</h1>
      <div style={styles.grid}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            image={movie.image}
            rating={movie.rating}
            year={movie.year}
            genre={movie.genre}
          />
        ))}
      </div>
    </div>
  );
};

export default Movies;
