import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../src/pages/Home";
import { BrowserRouter } from "react-router-dom";

describe("Home", () => {
  it("renders Home page content", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    // Add more specific assertions based on Home page content
    expect(screen.getByText(/MovieHub/i)).toBeInTheDocument();
  });
});
