import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import App from "../App"

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const app = render(<App />);
    const header = app.getByText(/react plants/i)
    expect(header).toBeInTheDocument();

});

test("form shows success message on submit with form details", () => {
    const { getByRole, getByLabelText, findAllByText } = render(<CheckoutForm />);

    fireEvent.change(getByLabelText(/first name/i), {
        target: { value: "Robert" }
      });
      fireEvent.change(getByLabelText(/last name/i), {
        target: { value: "Gondola" }
      });
      fireEvent.change(getByLabelText(/address/i), {
        target: { value: "My House Street" }
      });
      fireEvent.change(getByLabelText(/city/i), {
        target: { value: "Charlotte" }
      });
      fireEvent.change(getByLabelText(/state/i), {
        target: { value: "North Carolina" }
      });
      fireEvent.change(getByLabelText(/zip/i), {
        target: { value: "28173" }
      });

    const button = getByRole('button')
    fireEvent.click(button)
    const formData = findAllByText(/robert/i)
    expect(formData).toBeInTheDocument
});
