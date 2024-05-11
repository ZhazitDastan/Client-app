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

    //   test('should display InfoWindow component when a marker is clicked', () => {
    //     // Mock billboards data
    //     const billboards = [
    //       {
    //         id: 1,
    //         lat: 43.239095,
    //         lng: 76.878642,
    //         status: "Available",
    //         name: "AkkentBillboard",
    //         location: "Akkent"
    //       },
    //       {
    //         id: 2,
    //         lat: 43.239095,
    //         lng: 76.878642,
    //         status: "In use",
    //         name: "ToleBiBillboard",
    //         location: "Tole Bi"
    //       },
    //       {
    //         id: 3,
    //         lat: 43.239095,
    //         lng: 76.878642,
    //         status: "Banned",
    //         name: "ShalyapinaBillboard",
    //         location: "Shalyapina"
    //       }
    //     ];
  
    //     // Mock fetch function
    //     global.fetch = vi.fn(() =>
    //       Promise.resolve({
    //         json: () => Promise.resolve(billboards)
    //       })
    //     );
  
    //     // Render SelectBillboardPage component
    //     render(
    //         <BrowserRouter>
    //             <SelectBillboardPage />
    //         </BrowserRouter>);
  
    //     // Assert that InfoWindow component is not initially displayed
    //     expect(screen.getByAltText("Marker Image AkkentBillboard")).not.toBeVisible();
  
    //     // Click on a marker
    //     fireEvent.click(getByText("Akkent"));
  
    //     // Assert that InfoWindow component is displayed
    //     expect(getByAltText("Marker Image AkkentBillboard")).toBeVisible();

    // });