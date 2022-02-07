import {render, screen} from "@testing-library/react";
import React from "react";
import App from "./App";


/* This is a wrong way to do it */

//This test is now working, BUT it is recommended to use screen.getByText
/*
test("renders an h1", () => {
    const { getByText } = render(<App />);
    const h1 = getByText(/Hello React Testing Library/);
    expect(h1).toHaveTextContent("Hello React Testing Library");
});
*/

/*
test ("renders a debug of DOM", () => {
    render(<App />);
    screen.debug();
    
});
*/

// This test is now working
test ("renders an h1", () => {
    render(<App />);
    expect(screen.getByText(/Hello React Testing Library/i)).toBeInTheDocument();
});