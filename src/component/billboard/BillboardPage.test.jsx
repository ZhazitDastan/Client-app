import { describ, test } from "vitest";
import {render, screen, fireEvent} from "@testing-library/react";
import { BillboardPage } from "./BillboardPage";
import { BrowserRouter } from 'react-router-dom'
import "@testing-library/jest-dom/vitest";

    test('should render the header component', () => {
        render(
            <BrowserRouter>
                <BillboardPage />
            </BrowserRouter>
        );
        const headerElement = screen.getByRole('banner');
        expect(headerElement).toBeInTheDocument();
    });

    test('should render the Get Started button', () => {
        render(
            <BrowserRouter>
                <BillboardPage />
            </BrowserRouter>
        );
        const buttonElement = screen.getByText('Get Started');
        expect(buttonElement).toBeInTheDocument();
    });
    // The BillboardPage component should render the main content section


    test('should render the main content section', () => {
        render(
            <BrowserRouter>
                <BillboardPage />
            </BrowserRouter>
        );
        const mainContentElement = screen.getByRole('main');
        expect(mainContentElement).toBeInTheDocument();
    });
    // Verifying the rendering of the Footer component


    test('should render the Footer component', () => {
        render(
            <BrowserRouter>
                <BillboardPage />
            </BrowserRouter>
        );
        const footerElement = screen.getByRole('contentinfo');
        expect(footerElement).toBeInTheDocument();
    });   
    // Verifying the presence of a Link component with to="/info"


    test('should have a Link component with to="/info"', () => {
        render(
            <BrowserRouter>
                <BillboardPage />
            </BrowserRouter>
        );
        const linkElement = screen.getByRole('link', { name: /learn more/i });
        expect(linkElement).toHaveAttribute('to', '/info');
    });

    test('should redirect to the login page when the "Get Started" button is clicked', () => {
        render(
            <BrowserRouter>
                <BillboardPage />
            </BrowserRouter>
        );
        const buttonElement = screen.getByText('Get Started');
        fireEvent.click(buttonElement);
        expect(window.location.pathname).toBe('/login');
    });

    test('should open the "buynow" page when the link in the main content section is clicked', () => {
        render(
            <BrowserRouter>
                <BillboardPage />
            </BrowserRouter>
        );
        const linkElement = screen.getByText('BUY NOW');
        fireEvent.click(linkElement);
        expect(window.location.pathname).toBe('/buynow');
    });

    test('should have a Link component with to="/buynow"', () => {
        render(
            <BrowserRouter>
                <BillboardPage />
            </BrowserRouter>
        );
        const linkElement = screen.getByRole('link', { name: /buy now/i });
        expect(linkElement).toHaveAttribute('to', '/buynow');
    });