import { render, fireEvent } from "@testing-library/react"; // Or from `vitest-browser-react` if needed for browser-specific testing
import CustomButton from "./CustomButton";
import classes from './customButton.module.css';
import { expect, test, vi } from "vitest";

test("renders the button with children", () => {
  const { getByRole } = render(<CustomButton>Click Me</CustomButton>);
  
  // Get the button by its role and accessible name
  const button = getByRole("button", { name: "Click Me" });

  // Assert that the button is in the document
  expect(button).toBeInTheDocument();
});

test("calls onClick when clicked", async () => {
  const onClick = vi.fn();
  const { getByRole } = render(<CustomButton onClick={onClick}>Click Me</CustomButton>);
  const button = getByRole("button", { name: "Click Me" });
  fireEvent.click(button);

  expect(onClick).toHaveBeenCalledTimes(1);
});

test("applies custom class name", () => {
  const customClass = "my-custom-class";
  const { getByRole } = render(<CustomButton className={customClass}>Click Me</CustomButton>);

  // Get the button by its role and name
  const button = getByRole("button", { name: "Click Me" });

  // Assert that the custom class is applied
  expect(button).toHaveClass(customClass);
});

test("applies default class name when no className is passed", () => {
  const { getByRole } = render(<CustomButton>Click Me</CustomButton>);

  const button = getByRole("button", { name: "Click Me" });
  expect(button.className).toContain(classes.box);
});


test("CustomButton snapshot test", () => {
  // Render the component
  const { asFragment } = render(<CustomButton>Click Me</CustomButton>);

  // Take a snapshot of the rendered component
  expect(asFragment()).toMatchSnapshot();
});