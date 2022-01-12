export function addToDo(toDo) {
	return {
		type: "ADD_TODO",
		toDo,
	};
}

export function delToDo(id) {
	return {
		type: "DELETE_TODO",
		id,
	};
}
