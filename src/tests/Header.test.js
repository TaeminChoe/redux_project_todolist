import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import "@testing-library/jest-dom";

test("renders To Do List", () => {
	render(<Header />);
	const h1Element = screen.getByText("To Do List");
	expect(h1Element).toBeInTheDocument();
});
