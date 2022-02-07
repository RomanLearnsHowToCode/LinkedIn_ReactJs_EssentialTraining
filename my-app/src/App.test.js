import {render, screen} from "@testing-library/react";
import React from "react";
import App from "./App";


/* This is a wrong way to do it */
/*
test("renders an h1", () => {
    const { getByText } = render(<App />);
    const h1 = getByText(/Hello React Testing Library/);
    expect(h1).toHaveTextContent("Hello React Testing Library");
});
*/

test ("renders an h1", () => {
    render(<App />);
    //const h1Text = screen.getByText(/Hello React Testing Library/i);
    screen.debug();
    //expect(h1Text).toBeInTheDocument();
    //expect(screen.getByRole('<h1>', {name:/Hello React Testing Library/i})).toBeInTheDocument();
});


/*
test ("renders a debug of DOM", () => {
    render(<App />);
    screen.debug();

});
*/