import { fireEvent, screen } from "@testing-library/react";
import { render } from "@testing-library/react";
import ToDoList from "../components/ToDoList";
import "@testing-library/jest-dom";
import { store } from "../app/store";
import { Provider } from "react-redux";
import toDoList from "../reducers/toDoList";

describe("to do list", () => {
	describe("action", () => {
		const wrapper = render(
			<Provider store={store}>
				<ToDoList />
			</Provider>,
		);

		test("init input tag", () => {
			wrapper.setToDo({ toDo: "test" });
			// const inputElement = getByPlaceholderText("enter your to do...");
			// fireEvent.submit(inputElement, { target: { value: "test" } });
			expect(wrapper.toDo).toBe("");
		});

		// test("add to do", () => {});
	});
});

// let state = toDoList(undefined, {});
// const inputElement = getByPlaceholderText("enter your to do...");
// fireEvent.submit(inputElement, { target: { value: "test" } });

// expect(state).toHaveValue(true);

// const ul = document.querySelector(".list");
// // fireEvent.submit(inputElement, { target: { value: "testx" } });
// // expect(ul.childNodes.length).toBe(1);
// expect(inputElement.value).toBe("test");
// // expect(ul.hasChildNodes()).toBe(false);

// test("To Do List render test", () => {
// 	const { getByPlaceholderText } = render(
// 		<Provider store={store}>
// 			<ToDoList />
// 		</Provider>,
// 	);

// 	const inputElement = getByPlaceholderText("enter your to do...");
// 	expect(inputElement).toBeInTheDocument();
// });

// test("del to do", () => {
// 	const { getByText, getByPlaceholderText } = render(
// 		<Provider store={store}>
// 			<ToDoList />
// 		</Provider>,
// 	);

// 	const ul = document.querySelector(".list");
// 	const inputElement = getByPlaceholderText("enter your to do...");
// 	fireEvent.submit(inputElement, { target: { value: "test" } });

// 	const btnElement = getByText("X");
// 	fireEvent.click(btnElement);
// 	expect(ul.childNodes.length).toBe(0);
// });
