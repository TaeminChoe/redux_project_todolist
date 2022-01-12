import toDoCss from "../css/ToDo.module.css";

export default function ToDo({ toDo, delToDo }) {
	function remove(event) {
		delToDo(event.target.parentNode.id);
	}

	return (
		<div className={toDoCss.toDo} id={toDo.id}>
			{toDo.value}
			<button onClick={remove}>X</button>
		</div>
	);
}
