import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { findByTestAtrr, testStore } from "./../Utils/index";

const setup = (initialState = {}) => {
  const store = testStore(initialState);
  const enzymeWrapper = shallow(<App store={store} />)
    .childAt(0) //Remove de HOC ContentProvider
    .dive(); //Allow to see the component itself and its content
  return enzymeWrapper;
};

describe("App component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: "example title 1",
          body: "example body"
        },
        {
          title: "example title 2",
          body: "example body"
        },
        {
          title: "example title 3",
          body: "example body"
        }
      ]
    };
    wrapper = setup(initialState);
  });

  it("Should render without warning", () => {
    const component = findByTestAtrr(wrapper, "appComponent");
    expect(component.length).toBe(1);
  });

  it("Should change the state when toggleButton is call", () => {
    const classInstance = wrapper.instance();
    classInstance.toggleButton();
    const newState = classInstance.state.hideBtn;
    expect(newState).toBe(true);
  });

  it("Function exampleMethod should return correct value", () => {
    const classInstance = wrapper.instance();
    const returnedValue = classInstance.exampleMethod(6);
    expect(returnedValue).toBe(6);
  });
});
