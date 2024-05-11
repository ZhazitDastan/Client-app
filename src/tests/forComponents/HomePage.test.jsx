import { render,screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { test } from "vitest";
import {HomePage} from "../../component/home/HomePage"
import "@testing-library/jest-dom/vitest";

describe("Registration test", () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      );
    });
  
    test('should render the home page with correct styles and components', () => {
        
      expect(screen.getByText('HOME')).toBeInTheDocument();
      expect(screen.getByText('Here you can information about our project.')).toBeInTheDocument();
      expect(screen.getByText('INFO')).toBeInTheDocument();
      expect(screen.getByAltText('logo')).toBeInTheDocument();
    
    });
});
