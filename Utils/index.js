import checkPropTypes from "check-prop-types";
import { createStore, applyMiddleware } from "redux";
import RootReducer from "../src/reducers";
import { middlewares } from "../src/createStore";

export const findByTestAtrr = (component, atrr) => {
  const wrapper = component.find(`[data-test="${atrr}"]`);
  return wrapper;
};

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );
  return propsErr;
};

export const testStore = initialState => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(RootReducer, initialState);
};
