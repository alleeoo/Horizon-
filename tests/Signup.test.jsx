import React from "react";
import { render, screen } from "@testing-library/react";
import Signup from "../src/pages/Signup";
import { BrowserRouter } from "react-router-dom";

describe("Signup", () => {
  it("renders the signup form with heading and fields", () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );
    expect(screen.getByText(/create account/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /sign up/i })
    ).toBeInTheDocument();
  });
});
