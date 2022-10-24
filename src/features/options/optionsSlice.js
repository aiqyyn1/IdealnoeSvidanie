import { createSlice } from "@reduxjs/toolkit";
import { getFilterCategories } from "./actions";

const initialState = {
	sorting: {
		value: "cheap",
		isOpenSheet: false,
	},
	filter: {
		isOpenFilter: false,
		categories: {
			loading: false,
			list: [],
		},
		price: {
			from: 0,
			to: 0,
		},
		city: "",
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
		openFilterBlock: (state) => {
			state.filter.isOpenFilter = true;
		},
		closeFilterBlock: (state) => {
			state.filter.isOpenFilter = false;
		},
		setFilterCategoriesList: (state, action) => {
			state.filter.categories.list = action.payload;
		},
	},
	extraReducers: {
		[getFilterCategories.pending]: (state) => {
			state.filter.categories.loading = true;
		},
		[getFilterCategories.fulfilled]: (state, { payload }) => {
			state.filter.categories.loading = false;
			state.filter.categories.list = payload;
		},
		[getFilterCategories.rejected]: (state) => {
			state.filter.categories = false;
		},
	},
});

export const {
	setSorting,
	openBottomSheet,
	closeBottomSheet,
	openFilterBlock,
	closeFilterBlock,
	setFilterCategoriesList,
} = optionsSlice.actions;

export default optionsSlice.reducer;
