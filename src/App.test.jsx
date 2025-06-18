import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders Navbar and Home route by default", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  // Check for Navbar by site title
  expect(screen.getByText(/moviehub/i)).toBeInTheDocument();
  // Check for Home page content (adjust to something unique in your Home component)
  // expect(screen.getByText(/home/i)).toBeInTheDocument();
});
