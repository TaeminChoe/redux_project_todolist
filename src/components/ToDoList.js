import toDoListCss from "../css/ToDoList.module.css";
import { useState } from "react";
import { connect } from "react-redux";
import { addToDo, delToDo } from "../module/ToDoList/actions";
import ToDo from "./ToDo";

function ToDoList(props) {
	const [toDo, setToDo] = useState("");

	function addToDo(event) {
		event.preventDefault();
		props.addToDo(toDo);
		setToDo("");
	}

	function onChange(event) {
		setToDo(event.target.value);
	}

	return (
		<div className={toDoListCss.toDoList}>
			<div>
				<form onSubmit={addToDo}>
					<input
						className={toDoListCss.input}
						value={toDo}
						onChange={onChange}
						type="text"
						placeholder="enter your to do..."
					/>
				</form>
			</div>
			{!props.toDoList ? (
				<div>enter your to do</div>
			) : (
				<div>
					<ul className={toDoListCss.list}>
						{props.toDoList.map(toDo => (
							<li key={toDo.id}>
								<ToDo toDo={toDo} delToDo={props.delToDo} />
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}

const mapStateToProps = state => {
	return { toDoList: state.toDoList };
};

const mapDispatchToProps = dispatch => ({
	addToDo: toDo => dispatch(addToDo(toDo)),
	delToDo: id => dispatch(delToDo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
