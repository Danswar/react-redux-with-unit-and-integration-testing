import React from "react";
import { findByTestAtrr, checkProps } from "./../../../Utils";
import ShareButton from "./index";
import { shallow } from "enzyme";

describe("ShareButton Component", () => {
  describe("Check Proptypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        buttonText: "Test Text",
        emitEvent: () => {}
      };
      const propsErr = checkProps(ShareButton, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe("Renders", () => {
    let component;
    beforeEach(() => {
      const props = {
        buttonText: "test",
        emitEvent: () => {}
      };
      component = shallow(<ShareButton {...props} />);
      return component;
    });

    it("Should render button", () => {
      let wrapper = findByTestAtrr(component, "shareButtonComponent");
      expect(wrapper.length).toBe(1);
    });
  });
});
