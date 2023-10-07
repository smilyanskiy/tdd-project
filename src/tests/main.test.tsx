import { fireEvent, render, screen } from "@testing-library/react";
import PlanList from "../components/PlantList/PlantList";
import PlanEdit from "../components/PlanEdit/PlanEdit";

test("renders learn react link", () => {
  render(<PlanList />);
  const button = screen.getByText(/Create/i);
  expect(button).toBeEnabled();
  expect(button).toBeInTheDocument();
});

test("Can check create for is opened after create button click", () => {
  render(<PlanList />);
  const button = screen.getByText(/Create/i);

  fireEvent.click(button);
  expect(<PlanList />).toBeVisible();
});
