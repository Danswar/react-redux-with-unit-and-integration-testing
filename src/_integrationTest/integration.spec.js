import moxios from "moxios";
import { testStore } from "../../Utils";
import { fetchPost } from "../actions";

describe("fetchPost Actions", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("Store is update correctly", () => {
    const expectedState = [
      {
        title: "Exxamaple 1",
        body: "Some text"
      },
      {
        title: "Exxamaple 2",
        body: "Some text"
      },
      {
        title: "Exxamaple 3",
        body: "Some text"
      }
    ];

    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState
      });
    });

    return store.dispatch(fetchPost()).then(() => {
      const newState = store.getState();
      expect(newState.posts).toBe(expectedState);
    });
  });
});
