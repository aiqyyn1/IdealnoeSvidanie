import { connect } from "react-redux";
import { openBottomSheet } from "../../../features/options/optionsSlice";
import { Header as Presentational } from "./presentational";

const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => ({
	openBottomSheet: () => dispatch(openBottomSheet()),
});

export default connect(null, mapDispatchToProps)(Presentational);
