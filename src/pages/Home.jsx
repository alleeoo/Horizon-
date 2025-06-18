import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { movies } from "../data/movies";

const Home = () => {
  const styles = {
    container: {
      width: "100%",
      minHeight: "100vh",
      padding: "2rem 4rem",
    },
    hero: {
      background:
        "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "500px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      color: "#ffffff",
      marginBottom: "3rem",
      borderRadius: "12px",
    },
    heroTitle: {
      fontSize: "3rem",
      fontWeight: "bold",
      marginBottom: "1rem",
      color: "#ffffff",
    },
    heroSubtitle: {
      fontSize: "1.2rem",
      marginBottom: "2rem",
      color: "#e0e0e0",
      maxWidth: "600px",
    },
    ctaButton: {
      backgroundColor: "#0066cc",
      color: "#ffffff",
      padding: "1rem 2rem",
      borderRadius: "4px",
      textDecoration: "none",
      fontSize: "1.1rem",
      fontWeight: "600",
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: "#0052a3",
        transform: "translateY(-2px)",
      },
    },
    section: {
      marginBottom: "3rem",
    },
    sectionTitle: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "1.5rem",
      color: "#ffffff",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    sectionIcon: {
      color: "#0066cc",
    },
    movieGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      gap: "2rem",
    },
    viewAllButton: {
      display: "inline-block",
      color: "#0066cc",
      textDecoration: "none",
      fontSize: "1rem",
      fontWeight: "500",
      marginTop: "1rem",
      transition: "color 0.3s ease",
      "&:hover": {
        color: "#0052a3",
      },
    },
  };

  return (
    <div style={styles.container}>
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Welcome to MovieHub</h1>
        <p style={styles.heroSubtitle}>
          Discover the latest movies, TV shows, and dramas. Create your
          watchlist and share your reviews with the community.
        </p>
        <Link to="/movies" style={styles.ctaButton}>
          Explore Movies
        </Link>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <span style={styles.sectionIcon}>🎬</span>
          Featured Movies
        </h2>
        <div style={styles.movieGrid}>
          {movies.slice(0, 4).map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
        <Link to="/movies" style={styles.viewAllButton}>
          View All Movies →
        </Link>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <span style={styles.sectionIcon}>📺</span>
          Popular Dramas
        </h2>
        <div style={styles.movieGrid}>
          {movies
            .filter((movie) => movie.genre === "Drama")
            .slice(0, 4)
            .map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
        </div>
        <Link to="/dramas" style={styles.viewAllButton}>
          View All Dramas →
        </Link>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <span style={styles.sectionIcon}>🔥</span>
          Trending Now
        </h2>
        <div style={styles.movieGrid}>
          {movies
            .filter((movie) => movie.rating >= 4.5)
            .slice(0, 4)
            .map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
        </div>
        <Link to="/trending" style={styles.viewAllButton}>
          View All Trending →
        </Link>
      </section>
    </div>
  );
};

export default Home;
