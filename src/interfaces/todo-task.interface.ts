export interface TaskInterface {
	id: string;
	title: string;
	description: string;
	date: string;
	priority: string;
}

export interface TodoListInterface {
	todoList: TaskInterface[];
	setTodoList: (value: any) => void;
	sortTodoListByDate: (list: TaskInterface[]) => void;
}
