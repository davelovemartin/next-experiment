import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

test("it renders", () => {
  const text = "test";
  const { debug, getByText } = render(<Footer title={text} />);
  console.log("something");
  const myText = getByText(text);
  expect(myText).toHaveTextContent(text);
  debug();
});
