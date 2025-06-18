import React from "react";
import { render, screen } from "@testing-library/react";
import Wishlist from "../src/pages/Wishlist";
import { BrowserRouter } from "react-router-dom";

describe("Wishlist", () => {
  it("renders Wishlist page content", () => {
    render(
      <BrowserRouter>
        <Wishlist />
      </BrowserRouter>
    );
    expect(screen.getByText(/wishlist/i)).toBeInTheDocument();
  });
});
