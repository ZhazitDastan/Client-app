import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { test } from "vitest";
import { Footer } from "../../component/footer/Footer";
import "@testing-library/jest-dom/vitest";

test('should render the footer component with social media links, main page links, and about us information', () => {

    render(
        <BrowserRouter>
            <Footer />
        </BrowserRouter>);

    // Assert
    expect(screen.getByText('Instagram')).toBeInTheDocument();
    expect(screen.getByText('Telegram')).toBeInTheDocument();
    expect(screen.getByText('Meta')).toBeInTheDocument();
    expect(screen.getByText('INFO')).toBeInTheDocument();
    expect(screen.getByText('BILLBOARD')).toBeInTheDocument();
    expect(screen.getByText('BUY NOW')).toBeInTheDocument();
    expect(screen.getByText('Seitkhan Bekseit')).toBeInTheDocument();
    expect(screen.getByText('Billboard©')).toBeInTheDocument();
    expect(screen.getByText('Est 2023 | All right reserved')).toBeInTheDocument();
  });

  