import { BrowserRouter } from "react-router-dom";
import { render,screen,fireEvent } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom/vitest";
import { test } from "vitest";


describe('TEST APP', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });

  test('should redirect to the "login page" when the "Get Started" button is clicked', () => {
    const buttonElement = screen.getByText('Get Started');
    fireEvent.click(buttonElement);
    expect(window.location.pathname).toBe('/login');
  });

  test('should redirect to the select "buynow page" when the "BUY NOW" button is clicked', () => {
    const buttonElement = screen.getByText('Buy now');
    fireEvent.click(buttonElement);
    expect(window.location.pathname).toBe('/buynow');
  });

  test('should redirect to the "login page" when the "Log in" link is clicked', () => {
    const linkElement = screen.getByText('Log in');
    fireEvent.click(linkElement);
    expect(window.location.pathname).toBe('/login');
  });

  test('should redirect to the "info page" when the "INFO" link is clicked', () => {
    const linkElement = screen.getByText('Info');
    fireEvent.click(linkElement);
    expect(window.location.pathname).toBe('/info');
  });

  test('should redirect to the "info page" when the "LEARN MORE" link is clicked', () => {
    const linkElement = screen.getByText('LEARN MORE');
    fireEvent.click(linkElement);
    expect(window.location.pathname).toBe('/info');
  });

  test('should redirect to the "registration page" when the "Sign up" link is clicked', () => {
    const linkElement = screen.getByText('Sign up');
    fireEvent.click(linkElement);
    expect(window.location.pathname).toBe('/registration');
  });

  test('should redirect to the "billboard page" when the "BILLBOARD" link is clicked', () => {
    const linkElement = screen.getByText('BILLBOARD');
    fireEvent.click(linkElement);
    expect(window.location.pathname).toBe('/billboard');
  });

  test('should redirect to the "home page" when the "Billboard(logo)" link is clicked', () => {
    const linkElement = screen.getByAltText('Logo');
    fireEvent.click(linkElement);
    expect(window.location.pathname).toBe('/');
  });
});