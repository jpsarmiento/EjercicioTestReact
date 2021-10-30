import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Like from "../like";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(
      <Like labelActive="Active" labelInactive="Inactive" />,
      container
    );
  });
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("Testing Like component", () => {
  it("Defaults to 0 likes", () => {
    const likes = document.getElementById("likes");
    expect(likes.textContent).toBe("Likes: 0");
  });
  it("Testing increase like", () => {
    const incremento = document.getElementById("increment");
    const likes = document.getElementById("likes");
    act(() => {
        incremento.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(likes.textContent).toBe("Likes: 1");
  });
  it("Testing decrease like", () => {
    const decremento = document.getElementById("decrement");
    const likes = document.getElementById("likes");
    act(() => {
        decremento.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(likes.textContent).toBe("Likes: -1");
  });
});

