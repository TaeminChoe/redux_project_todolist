export function addToDo(toDo, date) {
	return {
		type: "ADD_TODO",
		toDo,
		date,
	};
}

export function delToDo(id) {
	return {
		type: "DELETE_TODO",
		id,
	};
}
