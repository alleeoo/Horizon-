import React from "react";
import { render, screen } from "@testing-library/react";
import Review from "../src/pages/Review";
import { BrowserRouter } from "react-router-dom";

describe("Review", () => {
  it("renders Review page content", () => {
    render(
      <BrowserRouter>
        <Review />
      </BrowserRouter>
    );
    expect(screen.getByText(/review/i)).toBeInTheDocument();
  });
});
