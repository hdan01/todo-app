import { TodoTask } from "../TodoTask/todo-task";

import {
	TaskInterface,
	TodoListInterface,
} from "../../interfaces/todo-task.interface";
import { Checkbox } from "../../routes/check-box";
import { useEffect } from "react";

export const TodoList = ({
	todoList,
	setTodoList,
	sortTodoListByDate,
}: TodoListInterface) => {
	function handleSubmitUpdate(e: any) {
		e.preventDefault();

		const {
			0: { value: title },
			1: { value: description },
			2: { value: date },
			3: { value: priority },
			4: { value: isChecked },
		} = e.target;

		const data = todoList.map((todoTask) => {
			if (todoTask.id === e.target[0].id) {
				return {
					id: e.target[0].id,
					title,
					description,
					date,
					priority,
					isChecked,
				};
			}
			return todoTask;
		});
		sortTodoListByDate(data);
	}

	function onDeleteTask(e: any) {
		const data = todoList.filter((task) => task.id !== e.id);
		sortTodoListByDate(data);
	}

	return (
		<div>
			{todoList.map((todoTask: TaskInterface) => {
				return (
					<div key={todoTask.id}>
						<label>
							<Checkbox />
							{todoTask.title}
						</label>
						<TodoTask
							todoTask={todoTask}
							onSubmit={handleSubmitUpdate}
							onDelete={onDeleteTask}
						/>
					</div>
				);
			})}
		</div>
	);
};
