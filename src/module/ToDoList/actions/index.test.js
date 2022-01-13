import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { addToDo, delToDo } from "./index";

describe("action test", () => {
	test("addToDo test", () => {
		const toDo = "test";
		const date = "2022.1.1";

		expect(addToDo(toDo, date)).toStrictEqual({
			type: "ADD_TODO",
			toDo: "test",
			date: "2022.1.1",
		});
	});

	test("delToDo test", () => {
		expect(delToDo("test")).toStrictEqual({
			type: "DELETE_TODO",
			id: "test",
		});
	});
});
