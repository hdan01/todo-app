import { NewTaskForm } from "../components/UI/Form/form.module";

export function NewTask(props: any) {
	return (
		<>
			<div>
				<NewTaskForm onSubmit={props.onSubmit} onClick={props.onClick} />
			</div>
		</>
	);
}
