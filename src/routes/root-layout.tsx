import { MainHeader } from "../components/Header/main-header";
import { Outlet } from "react-router-dom";

export function RootLayout() {
	return (
		<>
			<MainHeader />
			<Outlet />
		</>
	);
}
