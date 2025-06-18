import React from "react";
import { render, screen } from "@testing-library/react";
import Trending from "../src/pages/Trending";
import { BrowserRouter } from "react-router-dom";

describe("Trending", () => {
  it("renders Trending page content", () => {
    render(
      <BrowserRouter>
        <Trending />
      </BrowserRouter>
    );
    expect(screen.getByText(/trending/i)).toBeInTheDocument();
  });
});
