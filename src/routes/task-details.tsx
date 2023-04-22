import { Form } from "react-router-dom";

import classes from "../styles-module/form.module.css";
import { Button } from "../components/UI/Button/button";

export function TaskDetails(props: any) {
	return (
		<>
			<div>
				<Form onSubmit={props.onSubmit} className={classes.form}>
					<div>
						<input
							id={props.value.id}
							type="text"
							required
							name="text"
							defaultValue={props.value.title}
							onChange={props.isUpdatingTitle}
						/>
					</div>
					<label htmlFor="body">Description</label>
					<div>
						<textarea
							name="description"
							id="body"
							rows={6}
							defaultValue={props.value.description}
							onChange={props.isUpdatingDescription}
						></textarea>
					</div>

					<div>
						<label htmlFor="date">Due Date</label>
						<input
							type="date"
							id="date"
							name="date"
							defaultValue={props.value.date}
							onChange={props.isUpdatingDate}
						/>
					</div>

					<label htmlFor="priority">Priority</label>
					<div>
						<input
							list="priorities"
							name="priority"
							autoComplete="off"
							defaultValue={props.value.priority}
							onChange={props.isUpdatingPriority}
						/>
						<datalist id="priorities">
							<option value="Low" />
							<option value="Normal" />
							<option value="High" />
						</datalist>
					</div>

					<div className={classes.actions}>
						<Button type="submit">Update</Button>

						<Button onClick={props.onClick}>Cancel</Button>
					</div>
				</Form>
			</div>
		</>
	);
}
function useState(arg0: boolean): [any, any] {
	throw new Error("Function not implemented.");
}
