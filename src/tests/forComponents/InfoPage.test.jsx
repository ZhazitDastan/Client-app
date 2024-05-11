import { describe, test } from "vitest";
import {render, screen, fireEvent} from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom'
import "@testing-library/jest-dom/vitest";
import { InfoPage } from "../../component/info/InfoPage";


describe('InfoPage Component Tests', () => {
    test('test_render_info_page_structure', () => {
        render(<BrowserRouter><InfoPage /></BrowserRouter>);
        expect(screen.getAllByText('INFO'));
        expect(screen.getByText('Here you can information about our project.')).toBeInTheDocument();
        expect(screen.getByText('PRODUCTS')).toBeInTheDocument();
        expect(screen.getByText('Our product are high quality works.')).toBeInTheDocument();
        expect(screen.getByText('BASE')).toBeInTheDocument();
        expect(screen.getByText('We were founded in 2023 as a team of smart and talented programmers fro SDU.')).toBeInTheDocument();
        expect(screen.getByText('JOIN OUR TEAM')).toBeInTheDocument();
        expect(screen.getByText('Buy now')).toBeInTheDocument();
        expect(screen.getByText('Chose one of our product and enjoy')).toBeInTheDocument();
    });

    test('test_info_page_image_sources_and_alts', () => {
        render(<BrowserRouter><InfoPage /></BrowserRouter>);
        expect(screen.getByAltText('main')).toHaveAttribute('src', expect.stringContaining('info1.png'));
        expect(screen.getByAltText('mainSdu')).toHaveAttribute('src', expect.stringContaining('main_SDU.png'));
        expect(screen.getByAltText('SDU')).toHaveAttribute('src', expect.stringContaining('main_LOGO.png'));
    });
});