import { connect } from "react-redux";
import {
	openBottomSheet,
	openFilterBlock,
} from "../../../features/options/optionsSlice";
import { Header as Presentational } from "./presentational";

const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => ({
	openBottomSheet: () => dispatch(openBottomSheet()),
	openFilterBlock: () => dispatch(openFilterBlock()),
});

export default connect(null, mapDispatchToProps)(Presentational);
