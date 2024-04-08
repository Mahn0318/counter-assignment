// import necessary react testing library helpers here
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
// import the Counter component here
import Counter from '../components/Counter.js'

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const testCounter = screen.getByText("Counter");
  expect(testCounter).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const testCount = screen.getByTestId("count");
  expect(testCount).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const testIncButton = screen.getByText("+");
  const testCount = screen.getByTestId("count");
  const currCount = parseInt(testCount.textContent);
  fireEvent.click(testIncButton);
  expect(parseInt(testCount.textContent)).toBe(currCount + 1);
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const testDecButton = screen.getByText("-");
  const testCount = screen.getByTestId("count");
  const currCount = parseInt(testCount.textContent);
  fireEvent.click(testDecButton);
  expect(parseInt(testCount.textContent)).toBe(currCount - 1);
});
