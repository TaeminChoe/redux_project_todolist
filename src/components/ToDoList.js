import toDoListCss from "../css/ToDoList.module.css";
import { useState } from "react";
import { connect } from "react-redux";
import { addToDo, delToDo } from "../module/ToDoList/actions";
import ToDo from "./ToDo";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";

function ToDoList(props) {
	const [toDo, setToDo] = useState("");
	const [date, setDate] = useState(new Date());

	function toString(date) {
		return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
	}

	function addToDo(event) {
		event.preventDefault();
		props.addToDo(toDo, toString(date));
		setToDo("");
	}

	function onChange(event) {
		setToDo(event.target.value);
	}

	return (
		<div className={toDoListCss.toDoList}>
			<div className={toDoListCss.date}>
				<label>날짜 선택</label>
				<DatePicker selected={date} onChange={setDate} locale={ko} />
			</div>
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
						{props.toDoList.map(toDo => {
							const stringDate = toString(date);
							if (toDo.date === stringDate) {
								return (
									<li key={toDo.id}>
										<ToDo
											toDo={toDo}
											delToDo={props.delToDo}
										/>
									</li>
								);
							}
						})}
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
	addToDo: (toDo, date) => dispatch(addToDo(toDo, date)),
	delToDo: id => dispatch(delToDo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
