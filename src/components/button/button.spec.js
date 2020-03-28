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
    let mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        buttonText: "test",
        emitEvent: mockFunc
      };
      component = shallow(<ShareButton {...props} />);
      return component;
    });

    it("Should render button", () => {
      let wrapper = findByTestAtrr(component, "shareButtonComponent");
      expect(wrapper.length).toBe(1);
    });

    it("Should emit callback on click event", () => {
      const button = findByTestAtrr(component, "shareButtonComponent");
      button.simulate("click");
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });
  });
});
