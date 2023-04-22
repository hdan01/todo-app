import classes from "./modal.module.css";

export function Modal({ children }: any) {
	return (
		<>
			<div className={classes.backdrop} />
			<dialog open className={classes.modal}>
				{children}
			</dialog>
		</>
	);
}
