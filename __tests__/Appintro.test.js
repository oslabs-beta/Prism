import React from "react";
import { render, screen} from "@testing-library/react";
import AppIntro from "../client/components/AppIntro";
test('Have appintro render',() => {
    render(<AppIntro />)
    expect(
        screen.getAllByText('|')
    )
})

test('Have header render',() => {
    render(<Header />)
    expect(
        screen.getAllByText('login')
    )
})