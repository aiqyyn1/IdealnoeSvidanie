import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { router } from "./routes";
import { OptionDetailModal } from "./components/modals";
import { store } from "./store";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
			<BrowserRouter>
				<OptionDetailModal />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
