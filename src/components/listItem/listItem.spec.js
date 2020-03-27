import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "../../../Utils";
import ListItem from "./index";

describe("ListItem Component", () => {
  describe("Check propTypes", () => {
    it("Should render without errors", () => {
      const expectedProps = {
        title: "Test title",
        desc: "Test desc"
      };
      const propsErr = checkProps(ListItem, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe("Should Renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "Test title",
        desc: "Test desc"
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it("component with title", () => {
      const component = findByTestAtrr(wrapper, "listItemComponent");
      expect(component.length).toBe(1);
    });

    it("Should render title", () => {
      const component = findByTestAtrr(wrapper, "title");
      expect(component.length).toBe(1);
    });
    it("Should render desc", () => {
      const component = findByTestAtrr(wrapper, "desc");
      expect(component.length).toBe(1);
    });
  });

  describe("Should not render", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: "Test desc"
      };
      wrapper = shallow(<ListItem {...props} />);
    });
    it("component without title", () => {
      const component = findByTestAtrr(wrapper, "listItemComponent");
      expect(component.length).toBe(0);
    });
  });
});
