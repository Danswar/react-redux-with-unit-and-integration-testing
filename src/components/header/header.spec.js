import React from "react";
import { shallow } from "enzyme";
import Header from "./index";

import { findByTestAtrr } from "../../Utils";

const setup = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it("It should render without error", () => {
    const wrapper = findByTestAtrr(component, "headerComponent");
    expect(wrapper.length).toBe(1); //check that there is only one div with className headerComponent
  });

  it("Should render logo", () => {
    const logo = findByTestAtrr(component, "imgLogo");
    expect(logo.length).toBe(1);
  });
});
