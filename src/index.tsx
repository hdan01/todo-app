import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { RootLayout } from "./routes/root-layout";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./style.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: <App />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
