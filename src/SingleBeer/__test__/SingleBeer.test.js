import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import SingleBeer from '../SingleBeer'
import '../../__mocks__/intersectionObserverMock';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});



afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders beer data", async () => {
  const fakeBeer = {
 
      abv: "2.2",
      name:'Fanta'
 
  };
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeBeer)
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<SingleBeer id="123" />, container);
  });

  expect(container.querySelector("strong").textContent).toBe(fakeBeer.abv);
  expect(container.querySelector("h2").textContent).toBe(fakeBeer.name);


  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});