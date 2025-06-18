import React from "react";
import { render, screen } from "@testing-library/react";
import MovieCard from "../src/components/MovieCard";

describe("MovieCard", () => {
  it("renders title, year, genre, and rating", () => {
    render(
      <MovieCard
        title="Inception"
        image="https://example.com/inception.jpg"
        rating={4.5}
        year={2010}
        genre="Sci-Fi"
      />
    );
    expect(screen.getByText("Inception")).toBeInTheDocument();
    expect(screen.getByText("2010")).toBeInTheDocument();
    expect(screen.getByText("Sci-Fi")).toBeInTheDocument();
    expect(screen.getByText("4.5")).toBeInTheDocument();
  });
});
