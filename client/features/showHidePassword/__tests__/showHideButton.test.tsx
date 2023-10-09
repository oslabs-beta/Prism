import React from "react";
import { render, screen } from "@testing-library/react";
import { ShowHideButton } from "../components/ShowHideButton";
import "@testing-library/jest-dom";
const mHandler = jest.fn();

describe('show/hide button for password', () => {
  test("show password icon", () => {
    render(<ShowHideButton clickHandler={mHandler} showPass={false} />);
    expect(screen.queryByTitle("show password")).toBeInTheDocument();
  });

  test('hide password icon', () => {
    render(<ShowHideButton clickHandler={mHandler} showPass={true} />);
    expect(screen.queryByTitle("hide password")).toBeInTheDocument();
  })
}
)

