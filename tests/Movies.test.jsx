import React from "react";
import { render, screen } from "@testing-library/react";
import Movies from "../src/pages/Movies";
import { BrowserRouter } from "react-router-dom";

describe("Movies", () => {
  it("renders Movies page content", () => {
    render(
      <BrowserRouter>
        <Movies />
      </BrowserRouter>
    );
    // Add more specific assertions based on Movies page content
    expect(screen.getByText(/movies/i)).toBeInTheDocument();
  });
});
