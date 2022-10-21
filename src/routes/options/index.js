import { connect } from "react-redux";
import { closeBottomSheet } from "../../features/options/optionsSlice";
import { Options as Presentational } from "./presentational";

const mapStateToProps = (state) => {
	const { isOpenSheet } = state.options.sorting;
	return {
		isOpenSheet,
	};
};

const mapDispatchToProps = (dispatch) => ({
	closeBottomSheet: () => dispatch(closeBottomSheet()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Presentational);
