import { combineReducers } from "redux";

function toDoList(state = [], action) {
	switch (action.type) {
		case "ADD_TODO":
			const now = new Date();
			return [
				...state,
				{
					id: now.getTime(),
					value: action.toDo,
					inDone: false,
				},
			];

		case "DELETE_TODO":
			const newState = state.filter(
				toDo => toDo.id !== Number(action.id),
			);
			return newState;

		default:
			return state;
	}
}

export default combineReducers({
	toDoList,
});
