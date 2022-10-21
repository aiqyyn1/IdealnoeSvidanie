import { configureStore } from "@reduxjs/toolkit";
import optionDetailReducer from "./features/option-detail/optionDetailSlice";
import optionsSlice from "./features/options/optionsSlice";

export const store = configureStore({
	reducer: {
		optionDetail: optionDetailReducer,
		options: optionsSlice,
	},
});
