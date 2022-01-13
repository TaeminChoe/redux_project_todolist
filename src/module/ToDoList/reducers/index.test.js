import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import toDoList from "./index";

describe("reducer tests", () => {
	// let state = toDoList([], {});

	test("default", () => {
		expect(toDoList(undefined, {}).toDoList).toEqual([]);
	});

	describe("ADD_TODO", () => {
		const action = {
			type: "ADD_TODO",
			id: "id",
			toDo: "toDo",
			inDone: false,
			date: "date",
		};
		test("ADD_TODO", () => {
			expect(toDoList({}, action).toDoList[0].inDone).toEqual(false);
		});
		test("ADD_TODO", () => {
			expect(toDoList({}, action).toDoList[0].date).toEqual("date");
		});
		test("ADD_TODO", () => {
			expect(toDoList({}, action).toDoList[0].value).toEqual("toDo");
		});
	});
});
