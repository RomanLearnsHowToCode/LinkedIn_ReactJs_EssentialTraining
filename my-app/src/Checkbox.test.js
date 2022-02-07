import {React} from "react";
import {render, screen } from "@testing-library/react"
import { fireEvent } from "@testing-library/react";
import {Checkbox} from "./Checkbox.js"

// This test will find checkbox, it will find the not checked property, will "fire event click" and the result should be clicked (checked = true)
test("Selecting checkbox", () => {
    render(<Checkbox />);
    const checkbox = screen.getByLabelText(/not checked/);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
})