import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	show: false,
	data: null,
};

export const optionDetailModalSlice = createSlice({
	name: "option-detail-modal",
	initialState,
	reducers: {
		showModal: (state, action) => {
			state.show = true;
			state.data = action.payload;
		},
		closeModal: (state) => {
			state.show = false;
		},
	},
});

export const { showModal, closeModal } = optionDetailModalSlice.actions;

export default optionDetailModalSlice.reducer;
