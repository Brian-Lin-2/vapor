import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import SideMenu from "../components/SideMenu";

describe("Rendering / Opening:", () => {
  it("Renders side-menu icon.", () => {
    render(<SideMenu />);

    expect(screen.getByAltText(/menu/i));
  });

  it("Side menu opens when icon is clicked.", async () => {
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <SideMenu />
      </BrowserRouter>
    );

    const button = screen.getByAltText(/menu/i);
    await user.click(button);

    expect(screen.getByTestId(/side-menu/i));
  });
});
