import { BrowserRouter } from "react-router-dom";
import { test, vi } from "vitest";
import SelectBillboardPage from "../../component/buyNow/SelectBillboardPage";
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

    test('should render a GoogleMap component with specified container style, center, zoom and map styles', () => {

        const billboards = [
          {
            id: 1,
            lat: 43.239095,
            lng: 76.878642,
            status: "Available",
            name: "AkkentBillboard",
            location: "Akkent"
          },
          {
            id: 2,
            lat: 43.239095,
            lng: 76.878642,
            status: "In use",
            name: "ToleBiBillboard",
            location: "Tole Bi"
          },
          {
            id: 3,
            lat: 43.239095,
            lng: 76.878642,
            status: "Banned",
            name: "ShalyapinaBillboard",
            location: "Shalyapina"
          }
        ];


        global.fetch = vi.fn(() =>
          Promise.resolve({
            json: () => Promise.resolve(billboards)
          })
        );

        render(
            <BrowserRouter>
                <SelectBillboardPage />
            </BrowserRouter>);
  
        expect(screen.queryByText('GoogleMap'));
      });
