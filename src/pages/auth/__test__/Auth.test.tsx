import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import SignUp from "../sign-up";
import { Provider } from "react-redux";
import { store } from "@/store/store";

describe("Authentication Page", () => {
  test("should render the sign-up form", async () => {
    render(
      <Provider store={store}>
        <SignUp />
      </Provider>
    );

    const firstNameLabel = await screen.findByLabelText("First Name");
    expect(firstNameLabel).toBeInTheDocument();

    const firstNameInput = await screen.findByPlaceholderText("First name");
    expect(firstNameInput).toBeInTheDocument();

    const lastNameLabel = await screen.findByLabelText("Last Name");
    expect(lastNameLabel).toBeInTheDocument();

    const lastNameInput = await screen.findByPlaceholderText("Last Name");
    expect(lastNameInput).toBeInTheDocument();

    const emailLabel = await screen.findByLabelText("Email");
    expect(emailLabel).toBeInTheDocument();

    const emailInput = await screen.findByPlaceholderText("Email Address");
    expect(emailInput).toBeInTheDocument();

    const passwordLabel = await screen.findByLabelText("Password");
    expect(passwordLabel).toBeInTheDocument();

    const confirmPasswordLabel = await screen.findByLabelText(
      "Confirm Password"
    );
    expect(confirmPasswordLabel).toBeInTheDocument();

    const passwordInput = await screen.findAllByPlaceholderText("********");
    expect(passwordInput[0]).toBeInTheDocument();
    expect(passwordInput[1]).toBeInTheDocument();

    const submitButton = await screen.findByRole("button", {
      name: "Sign Up",
    });
    expect(submitButton).toBeInTheDocument();
  });

  test("should fill the form and submit", async () => {
    render(
      <Provider store={store}>
        <SignUp />
      </Provider>
    );

    const firstNameInput = await screen.findByPlaceholderText("First name");
    fireEvent.change(firstNameInput, { target: { value: "John" } });
    expect(firstNameInput).toHaveValue("John");

    const lastNameInput = await screen.findByPlaceholderText("Last Name");
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    expect(lastNameInput).toHaveValue("Doe");

    const emailInput = await screen.findByPlaceholderText("Email Address");
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    expect(emailInput).toHaveValue("john@example.com");

    const passwordInput = await screen.findAllByPlaceholderText("********");
    fireEvent.change(passwordInput[0], { target: { value: "123123123" } });
    expect(passwordInput[0]).toHaveValue("123123123");

    fireEvent.change(passwordInput[1], { target: { value: "123123123" } });
    expect(passwordInput[1]).toHaveValue("123123123");

    const button = await screen.findByRole("button", { name: /Sign Up/i });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
  });
});
