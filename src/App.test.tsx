// src/App.test.tsx
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  it("renders the heading", () => {
    render(<App />);

    // Check if the heading is present
    const heading = screen.getByRole("heading", { name: /hello world!/i });
    expect(heading).toBeInTheDocument();
  });

  it("has the correct classes", () => {
    render(<App />);

    const heading = screen.getByRole("heading", { name: /hello world!/i });
    expect(heading).toHaveClass("text-3xl");
    expect(heading).toHaveClass("font-bold");
    expect(heading).toHaveClass("underline");
  });
});
