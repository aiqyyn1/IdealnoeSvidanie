import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { router } from "./routes";
import { store } from "./store";
import Modals from "./components/modals";

import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<>
		<Provider store={store}>
			<RouterProvider router={router} />
			<BrowserRouter>
				<Modals />
			</BrowserRouter>
		</Provider>
	</>
);
