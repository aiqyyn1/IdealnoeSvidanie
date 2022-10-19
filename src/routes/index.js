import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "./main";
import ErrorPage from "./error-page";
import Options from "./options";
import { ROUTES } from "../constants";

export const router = createBrowserRouter([
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
