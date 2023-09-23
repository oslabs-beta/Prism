import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Login from "../Login";
import { beforeEach, describe, expect, jest, test } from "@jest/globals";
// to import Jest and mocking useNavigate
import "@testing-library/jest-dom";
import { ThemeProvider } from "../ClusterView/ClusterViewHeader/themeContext";
import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom"; // ne
const mockUsedNavigate = jest.fn();

// jest.mock("react-router-dom", () => ({
//   useNavigate: () => mockUsedNavigate,
// }));

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Renders Login component before each test
beforeEach(() => {
  render(
    <ThemeProvider initialTheme={"dark"}>
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path="/" />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
});

test("If it renders", () => {
  const ha = screen.getByText(/Login Form/);
  // screen.debug();
  expect(ha).toBeInTheDocument();
});

test("If username and password input bars render", () => {
  const username = screen.getByRole("textbox", {
    name: "username",
  });
  const password = screen.getByLabelText(/password/);
  expect(username).toBeInTheDocument();
  expect(password).toBeInTheDocument();
});
