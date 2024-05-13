import { render,screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { test } from "vitest";
import { LoginPage } from "../../component/login/LoginPage";
import "@testing-library/jest-dom/vitest";

    test('should render the login page with the logo and input fields', () => {
        render(
            <BrowserRouter>
                <LoginPage />
            </BrowserRouter>);
    
        const logo = screen.getByAltText('logo');
        const usernameInput = screen.getByPlaceholderText('Username');
        const passwordInput = screen.getByPlaceholderText('Password');
    
        expect(logo).toBeInTheDocument();
        expect(usernameInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
      });