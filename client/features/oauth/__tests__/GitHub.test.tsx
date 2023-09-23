import React, { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import Signup from "../../../components/Signup";
import Login from "../../../components/Login";
import "@testing-library/jest-dom";
import { ThemeProvider } from "../../../components/ClusterView/ClusterViewHeader/themeContext";
import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom"; // needed to deal with router
// test that sign up and login pages both render the github button
interface Props {}
// const window: Object  = {
//   watchMedia: (arg: string): Object =>  {return {matches: true }}
// }
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
function renderRoutes(component: ReactNode) {
  render(
    <ThemeProvider initialTheme={"dark"}>
      <BrowserRouter>
        <Routes>
          <Route element={component} path="/" />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
describe("OAuth with GitHub button rendering", () => {
  it("shows up on the signup page ", () => {
    renderRoutes(<Signup />);
    expect(screen.getByText("Sign up with GitHub")).toBeInTheDocument();
  });

  it("shows up on the login page", () => {
    renderRoutes(<Login />);
    expect(screen.getByText("Sign in with GitHub")).toBeInTheDocument();
  });
});
