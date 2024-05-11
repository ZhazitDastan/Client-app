import { BrowserRouter } from "react-router-dom";
import { test, vi } from "vitest";
import { Header } from "../../component/header/Header";
import { fireEvent, render,screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import React from "react";

test('should render the header component with logo, navigation links, and login/signup buttons', () => {

    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>);

    // Assert
    expect(screen.getByAltText('Logo')).toBeInTheDocument();
    expect(screen.getByText('Info')).toBeInTheDocument();
    expect(screen.getByText('Billboard')).toBeInTheDocument();
    expect(screen.getByText('Buy now')).toBeInTheDocument();
    expect(screen.getByText('Sign up')).toBeInTheDocument();
    expect(screen.getByText('Log in')).toBeInTheDocument();
  });
