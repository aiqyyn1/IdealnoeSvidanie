import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./routes/main";
import ErrorPage from "./routes/error-page";
import Options from "./routes/options";
import { ROUTES } from "./constants";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
	{
		path: ROUTES.MAIN,
		element: <Main />,
		errorElement: <ErrorPage />,
	},
	{
		path: ROUTES.OPTIONS,
		element: <Options />,
		errorElement: <ErrorPage />,
	},
]);

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
