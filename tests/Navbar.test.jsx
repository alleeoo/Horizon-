import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "../src/components/Navbar";
import { BrowserRouter } from "react-router-dom";

describe("Navbar", () => {
  it("renders all navigation links and auth buttons", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(screen.getByText(/MovieHub/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Movies/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Dramas/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Trending/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Wishlist/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Review/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Login/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Sign Up/i })).toBeInTheDocument();
  });
});
