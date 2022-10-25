import { connect } from "react-redux";
import {
	closeBottomSheet,
	setSorting,
} from "../../features/options/optionsSlice";
import { Options as Presentational } from "./presentational";

const mapStateToProps = (state) => {
	const { isOpenSheet, value } = state.options.sorting;
	const { isOpenFilter } = state.options.filter;
	return {
		isOpenSheet,
		sortingValue: value,
		isOpenFilter,
	};
};

const mapDispatchToProps = (dispatch) => ({
	closeBottomSheet: () => dispatch(closeBottomSheet()),
	setSorting: (data) => {
		dispatch(setSorting(data));
		dispatch(closeBottomSheet());
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Presentational);
