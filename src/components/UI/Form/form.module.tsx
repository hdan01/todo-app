import { Form } from "react-router-dom";

import { Modal } from "../Modal/modal";
import { Button } from "../Button/button";

import classes from "../../../styles-module/form.module.css";

export function NewTaskForm(props: any) {
	const defaultTodoTask = {
		id: "",
		title: "",
		description: "",
		date: new Date(),
		priority: "",
	};

	return (
		<>
			<div>
				<Modal>
					<h2>New Task</h2>
					{/* Method gì cho Form? default value đã là _self => display current window */}
					<Form onSubmit={props.onSubmit} className={classes.form}>
						<div>
							<input
								id="title"
								type="text"
								name="text"
								defaultValue={defaultTodoTask.title}
							/>
						</div>
						<label htmlFor="body">Description</label>
						<div>
							<textarea
								name="description"
								id="body"
								rows={6}
								defaultValue={defaultTodoTask.description}
							></textarea>
						</div>

						<div>
							<label htmlFor="date">Due Date</label>
							<input type="date" id="date" name="date" />
						</div>

						<label htmlFor="priority">Priority</label>
						<div>
							<input
								list="priorities"
								name="priority"
								autoComplete="off"
								defaultValue={defaultTodoTask.priority}
							/>
							<datalist id="priorities">
								<option value="Low" />
								<option value="Normal" />
								<option value="High" />
							</datalist>
						</div>

						<div className={classes.actions}>
							<Button type="submit">Add</Button>

							<Button onClick={props.onClick}>Cancel</Button>
						</div>
					</Form>
				</Modal>
			</div>
		</>
	);
}
