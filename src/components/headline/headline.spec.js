import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";
import { findByTestAtrr, checkProps } from "../../../Utils";

const setup = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline component", () => {
  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectProps = {
        header: "Test Header",
        desc: "Test Desc",
        tempArray: [
          {
            fName: "Test name",
            lName: "Test name",
            email: "test@test.com",
            age: 32,
            onlineStatus: false
          }
        ]
      };
      const propsErr = checkProps(Headline, expectProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe("Have props", () => {
    let component;
    beforeEach(() => {
      const props = {
        header: "Test header",
        desc: "Test Desc"
      };
      component = setup(props);
    });
    it("Should render without errors", () => {
      component = findByTestAtrr(component, "headlineComponent");
      expect(component.length).toBe(1);
    });
    it("Should render a H1", () => {
      component = findByTestAtrr(component, "header");
      expect(component.length).toBe(1);
    });
    it("Should render a P", () => {
      component = findByTestAtrr(component, "desc");
      expect(component.length).toBe(1);
    });
  });

  describe("Have no props", () => {
    let component;
    beforeEach(() => {
      component = setup();
    });
    it("Should render anything", () => {
      component = findByTestAtrr(component, "headlineComponent");
      expect(component.length).toBe(0);
    });
  });
});
