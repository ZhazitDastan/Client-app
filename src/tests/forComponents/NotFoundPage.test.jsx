import { BrowserRouter } from "react-router-dom";
import { describe, test } from "vitest";
import { NotFoundPage } from "../../component/notFound/NotFoundPage";
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

describe('NotFoundPage Component', () => {

  test('test_home_link_redirection', () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );
    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });
});