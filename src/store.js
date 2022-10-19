import { configureStore } from "@reduxjs/toolkit";
import optionDetailReducer from "./features/option-detail/optionDetailSlice";

export const store = configureStore({
	reducer: {
		optionDetail: optionDetailReducer,
	},
});
