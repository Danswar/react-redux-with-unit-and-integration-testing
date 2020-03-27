import { types } from "../../actions/types";
import postReducer from "./reducer";

describe("Post reducer:", () => {
  it("Should return default state", () => {
    const newState = postReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it("Should return new state if receving type", () => {
    const posts = [
      { title: "test 1" },
      { title: "test 2" },
      { title: "test 3" }
    ];

    const newState = postReducer(undefined, {
      type: types.GET_POST,
      payload: posts
    });

    expect(newState).toEqual(posts);
  });
});
