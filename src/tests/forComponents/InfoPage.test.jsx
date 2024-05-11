import { describ, test } from "vitest";
import {render, screen, fireEvent} from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom'
import "@testing-library/jest-dom/vitest";
import { InfoPage } from "../../component/info/InfoPage";

/*test('should render the header component', () => {
    render(
        <BrowserRouter>
            <InfoPage />
        </BrowserRouter>
    );
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
});

test('should redirect to the buynow page when the "BUY NOW" button is clicked', () => {
    render(
        <BrowserRouter>
            <InfoPage />
        </BrowserRouter>
    );
    const buttonElement = screen.getByText('BUY NOW');
    fireEvent.click(buttonElement);
    expect(window.location.pathname).toBe('/buynow');
});
*/