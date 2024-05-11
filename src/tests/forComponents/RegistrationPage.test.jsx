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

      // Navigates to the login page if the registration is successful
  //   test('should navigate to login page on successful registration', async () => {
  //     // Mock the fetch function
  //     vitest.spyOn(global, 'fetch').mockImplementation(() =>
  //       Promise.resolve({
  //         ok: true,
  //         text: () => Promise.resolve(),
  //       })
  //     );
  
  //     // Mock the useNavigate hook
  //     const navigateMock = vitest.fn();
  //     vitest.mock('react-router-dom', () => ({
  //       ...vitest.importActual('react-router-dom'),
  //       useNavigate: () => navigateMock,
  //     }));
  
  //     // Render the RegistrationPage component
  //     render(<RegistrationPage />);
  
  //     // Fill in the form data
  //     const nameInput = screen.getByPlaceholderText('Name');
  //     const emailInput = screen.getByPlaceholderText('Email');
  //     const usernameInput = screen.getByPlaceholderText('Username');
  //     const passwordInput = screen.getByPlaceholderText('Password');
  //     const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');
  //     const submitButton = screen.getByRole('button', { name: 'sign up' });
  
  //     vitest.fireEvent.change(nameInput, { target: { value: 'John' } });
  //     vitest.fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
  //     vitest.fireEvent.change(usernameInput, { target: { value: 'john123' } });
  //     vitest.fireEvent.change(passwordInput, { target: { value: 'password' } });
  //     vitest.fireEvent.change(confirmPasswordInput, { target: { value: 'password' } });
  
  //     // Submit the form
  //     vitest.fireEvent.click(submitButton);
  
  //     // Assert that the fetch function was called with the correct arguments
  //     expect(fetch).toHaveBeenCalledWith('http://localhost:8080/auth/signup', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({
  //         name: 'John',
  //         email: 'john@example.com',
  //         username: 'john123',
  //         password: 'password',
  //         confirmPassword: 'password',
  //       }),
  //     });
  
  //     // Assert that the navigate function was called with the correct argument
  //     expect(navigateMock).toHaveBeenCalledWith('/login');
  // });