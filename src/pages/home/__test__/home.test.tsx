import "@testing-library/jest-dom";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import HeroSection from "../hero";
import { TranslationContextProvider } from "@/hooks/useTranslation";

describe("Home Page -> Hero Section", () => {
  test("should show hero tagline", () => {
    render(
      <TranslationContextProvider>
        <HeroSection />
      </TranslationContextProvider>
    );
    expect(screen.getByText("New Arrival")).toBeInTheDocument();
    expect(
      screen.getByText("Discover the latest fashion trends")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa minus quidem maxime officiis repellendus dignissimos obcaecati assumenda consequatur."
      )
    ).toBeInTheDocument();
  });
});
