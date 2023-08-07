import React from "react";
import { render, screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import Login from "../client/components/Login";
import Dashboard from '../client/components/ClusterView/Dashboard'
import { beforeEach, describe, expect, jest, test } from '@jest/globals'
import { useNavigate } from "react-router";
// to import Jest and mocking useNavigate
const mockUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockUsedNavigate,
}));

// const useNavigateMock = () => {
//     return mockUsedNavigate
// }

// jest.mock('react-router-dom', () => {
//     useNavigate: () => mockUsedNavigate
// })

// Renders Login component before each test
beforeEach(() => {
    render(<Login />)
})

test('If it renders', () => {
    const ha = screen.getByText(/Login Form/)
    expect(ha).toBeInTheDocument()
})

test('If username and password input bars render', () => {
    const username = screen.getByRole('textbox', {
        name: "username"
    })
    const password = screen.getByLabelText(/password/)
    expect(username).toBeInTheDocument()
    expect(password).toBeInTheDocument()

})

test('If clicking close goes to dashboard', () => {
    
})
// function beforeEach(arg0: () => void) {
//     throw new Error("Function not implemented.");
// }
