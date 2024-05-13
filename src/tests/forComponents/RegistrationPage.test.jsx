import { render,screen,fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, test, vi } from "vitest";
import { RegistrationPage } from "../../component/registration/RegistrationPage";
import "@testing-library/jest-dom/vitest";

describe("Registration test", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <RegistrationPage />
      </BrowserRouter>
    );
  });

  test('should display an error message for password length less than 8 characters', () => {
    const passwordInput = screen.getByPlaceholderText('Password');
    const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');

    fireEvent.change(passwordInput, { target: { value: 'pass' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'pass' } });

    const errorMessage = screen.getByText('Password should be at least 8 characters long');

    expect(errorMessage).toBeInTheDocument();
  });

  test('should render the registration form with input fields', () => {
    const nameInput = screen.getByPlaceholderText('Name');
    const emailInput = screen.getByPlaceholderText('Email');
    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(confirmPasswordInput).toBeInTheDocument();
  });

  test('should display an error message when passwords do not match', () => {
    const passwordInput = screen.getByPlaceholderText('Password');
    const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');

    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'differentpassword' } });

    const errorMessage = screen.getByText('Passwords do not match');

    expect(errorMessage).toBeInTheDocument();
  });

  test('should display success message when passwords match and are at least 8 characters long', () => {
    const passwordInput = screen.getByPlaceholderText('Password');
    const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');
    const submitButton = screen.getByRole('button', { name: 'sign up' });

    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    const successMessage = screen.getByText('Passwords match');
    expect(successMessage).toBeInTheDocument();
  });
}); 
