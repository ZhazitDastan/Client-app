import { BrowserRouter } from "react-router-dom";
import { describe, test } from "vitest";
import { BillboardPage } from "../../component/billboard/BillboardPage";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

describe('BillboardPage Component', () => {
    test('test_render_main_structure', () => {
        render(
            <BrowserRouter>
                <BillboardPage />
            </BrowserRouter>
        );
        expect(screen.getByText('BILLBOARD')).toBeInTheDocument();
        expect(screen.getByText('Get Started')).toBeInTheDocument();
        expect(screen.getByText('Here you can information about our project.')).toBeInTheDocument();
        expect(screen.getAllByText('INFO'));
        expect(screen.getByText('PRODUCTS')).toBeInTheDocument();
        expect(screen.getByText('Our product are high quality works.')).toBeInTheDocument();
        expect(screen.getAllByText('BUY NOW'));
        expect(screen.getByText('BASE')).toBeInTheDocument();
        expect(screen.getByText('We were founded in 2023 as a team of smart and talented programmers fro SDU.')).toBeInTheDocument();
        expect(screen.getAllByText('LEARN MORE'));
        expect(screen.getByText('We are a company that')).toBeInTheDocument();
        expect(screen.getByText('receive people our')).toBeInTheDocument();
        expect(screen.getByText('billboard')).toBeInTheDocument();
        expect(screen.getByText('Basic of our project is make a billboard accessible to simple user.')).toBeInTheDocument();
        expect(screen.getByText('JOIN OUR TEAM')).toBeInTheDocument();
        expect(screen.getByText('Chose one of our product and enjoy')).toBeInTheDocument();
    });

    test('test_css_class_application', () => {
        render(
            <BrowserRouter>
                <BillboardPage />
            </BrowserRouter>
        );
        expect(screen.getByText('BILLBOARD')).toHaveClass('_homeText_234dde');
        expect(screen.getByText('Get Started')).toHaveClass('_pngBtn_234dde _PNGbtn_234dde');
    });

    test('test_broken_image_links_handling', () => {
        render(
            <BrowserRouter>
                <BillboardPage />
            </BrowserRouter>
        );
        const images = screen.getAllByRole('img');
        images.forEach(img => {
            expect(img).toHaveAttribute('src');
            expect(img.src).not.toBe('');
        });
    });   
});