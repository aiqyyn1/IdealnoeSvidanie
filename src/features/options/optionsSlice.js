import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	sorting: {
		value: "cheap",
		isOpenSheet: false,
	},
};

export const optionsSlice = createSlice({
	name: "options",
	initialState,
	reducers: {
		openBottomSheet: (state) => {
			state.sorting.isOpenSheet = true;
		},
		closeBottomSheet: (state) => {
			state.sorting.isOpenSheet = false;
		},
		setSorting: (state, action) => {
			state.sorting.value = action.payload;
		},
	},
});

export const { setSorting, openBottomSheet, closeBottomSheet } =
	optionsSlice.actions;

export default optionsSlice.reducer;
