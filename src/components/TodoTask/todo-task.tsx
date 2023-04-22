import { Button } from "../UI/Button/button";
import { TaskDetails } from "../../routes/task-details";

import { useState } from "react";

export function TodoTask(props: any) {
	const [displayDetailsTask, setDisplayDetailsTask] = useState(false);

	function showDetailsTask() {
		setDisplayDetailsTask(!displayDetailsTask);
	}
	return (
		<>
			<div>
				<Button onClick={showDetailsTask}>Details</Button>
				<Button onClick={() => props.onDelete(props.todoTask)}>Remove</Button>
				{displayDetailsTask && (
					<TaskDetails
						value={props.todoTask}
						onSubmit={props.onSubmit}
						onClick={showDetailsTask}
					/>
				)}
			</div>
		</>
	);
}
