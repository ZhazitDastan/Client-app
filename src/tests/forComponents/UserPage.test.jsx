import { render, waitFor,screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { test, vi } from "vitest";
import { UserPage } from "../../component/user/UserPage";
import "@testing-library/jest-dom/vitest";

    test('should handle empty response body', async () => {
        const mockFetch = vi.fn().mockResolvedValue({
          ok: true,
          text: vi.fn().mockResolvedValue("")
        });
        global.fetch = mockFetch;
  
        render(
            <BrowserRouter>
                <UserPage />
            </BrowserRouter>
        );
  
        await waitFor(() => {
          expect(mockFetch).toHaveBeenCalledWith("http://localhost:8080/secured/user", {
            method: 'GET',
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + localStorage.getItem("token")
            }
          });

          const signmassage = screen.getByTestId('signed');
          expect(signmassage).toBeInTheDocument();

          const signmafssage = screen.queryByText(<p>UNAUTHORIZED</p>);
          expect(signmafssage).not.toBeInTheDocument();
        }); 
      });

    