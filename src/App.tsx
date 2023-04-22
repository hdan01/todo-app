import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import { TaskInterface } from "./interfaces/todo-task.interface";

import { Outlet } from "react-router-dom";

import { NewTask } from "./routes/new-task";
import { TodoList } from "./components/TodoList/todo-list";
import { Button } from "./components/UI/Button/button";

function TodoApp() {
	const [todoList, setTodoList] = useState<TaskInterface[]>([]);

	const [displayNewTask, setDisplayNewTask] = useState(false);

	function showNewTaskModal() {
		setDisplayNewTask(!displayNewTask);
	}

	useEffect(() => {
		if (!localStorage.getItem("todoList")) {
			localStorage.setItem("todoList", JSON.stringify([]));
		} else {
			let todoList = JSON.parse(localStorage.getItem("todoList") ?? "");
			sortTodoListByDate(todoList);
		}
	}, []);

	function sortTodoListByDate(list: TaskInterface[]) {
		list.sort(function (a, b) {
			console.log("date => " + Date.parse(b.date) + " - " + Date.parse(a.date));
			return Date.parse(a.date) - Date.parse(b.date);
		});
		console.log("sorted todo list => " + JSON.stringify(list));
		setTodoList(list);
		localStorage.setItem("todoList", JSON.stringify(list));
	}

	function handleSubmit(e: any) {
		e.preventDefault();
		const {
			0: { value: title },
			1: { value: description },
			2: { value: date },
			3: { value: priority },
		} = e.target;
		const data = [...todoList];
		data.push({
			id: `todo-${nanoid()}`,
			title,
			description,
			date,
			priority,
		});
		sortTodoListByDate(data);
	}

	return (
		<>
			<main>
				<Button onClick={showNewTaskModal}>Add new to-do task</Button>
				{displayNewTask && (
					<NewTask onClick={showNewTaskModal} onSubmit={handleSubmit} />
				)}
				<TodoList
					todoList={todoList}
					setTodoList={(value: any) => setTodoList(value)}
					sortTodoListByDate={(value: any) => sortTodoListByDate(value)}
				/>
			</main>
			<Outlet />
		</>
	);
}

export default TodoApp;
