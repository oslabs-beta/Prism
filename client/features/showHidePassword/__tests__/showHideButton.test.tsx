import React from "react";
import { render, screen } from "@testing-library/react";
import { ShowHideButton } from "../components/ShowHideButton";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

const mHandler = jest.fn();

describe("show/hide button for password", () => {
  test("show password icon", () => {
    render(<ShowHideButton clickHandler={mHandler} showPass={false} />);
    expect(screen.queryByTitle("show password")).toBeInTheDocument();
  });

  test("hide password icon", () => {
    render(<ShowHideButton clickHandler={mHandler} showPass={true} />);
    expect(screen.queryByTitle("hide password")).toBeInTheDocument();
  });

  test("even handler invocation", async () => {
    render(<ShowHideButton clickHandler={mHandler} showPass={true} />);
    const user = userEvent.setup();
    await user.click(screen.getByRole("button"));
    expect(mHandler).toHaveBeenCalled();
  });
});
