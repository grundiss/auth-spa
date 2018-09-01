import * as React from "react";
import { render } from "enzyme";
import { Dashboard } from "../index";

jest.unmock("../index");
jest.mock("@material-ui/core/Button", () => ({ children }) => (
  <div data-mockof="@material-ui/core/Button">{children}</div>
));

describe("pages / Dashboard", function() {
  it("renders", function() {
    expect(render(<Dashboard />)).toMatchSnapshot();
  });
});
