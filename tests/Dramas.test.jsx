import React from "react";
import { render, screen } from "@testing-library/react";
import Dramas from "../src/pages/Dramas";
import { BrowserRouter } from "react-router-dom";

describe("Dramas", () => {
  it("renders Dramas page content", () => {
    render(
      <BrowserRouter>
        <Dramas />
      </BrowserRouter>
    );
    expect(screen.getByText(/dramas/i)).toBeInTheDocument();
  });
});
