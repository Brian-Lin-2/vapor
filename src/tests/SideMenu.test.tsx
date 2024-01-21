import { render, screen } from "@testing-library/react";
import SideMenu from "../components/SideMenu";

describe("SideMenu Component", () => {
  it("renders side-menu icon", () => {
    render(<SideMenu />);

    expect(screen.getByAltText(/menu/i));
  });
});
