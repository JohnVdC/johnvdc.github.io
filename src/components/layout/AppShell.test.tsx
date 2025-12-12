import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { AppShell } from "./AppShell";

describe("AppShell", () => {
  it("renders children correctly", () => {
    // Render AppShell with a test child
    render(
      <AppShell>
        <div data-testid="test-child">Content</div>
      </AppShell>
    );

    // Verify child is present
    expect(screen.getByTestId("test-child")).toBeInTheDocument();
  });

  it("renders system menu", () => {
    render(
      <AppShell>
        <div>Content</div>
      </AppShell>
    );
    // Verify "PROTOCOL 7" title from SystemMenu is present
    expect(screen.getByText(/PROTOCOL 7/i)).toBeInTheDocument();
  });
});
