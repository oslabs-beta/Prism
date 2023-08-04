import React from "react";
import { render, screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import Login from "../client/components/Login";

// to import Jest and mocking useNavigate
const mockUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}));

// Renders Login component before each test
beforeEach(() => {
    render(<Login />)
})

test('If it renders', () => {
    const ha = screen.getByText(/Login Form/)
    expect(ha).toBeInTheDocument()
})

test('If username and password input bars render', () => {
    const username = screen.getByDisplayValue('Username')
    expect(username).toBeInTheDocument()
})