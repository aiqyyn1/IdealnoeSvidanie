import { connect } from "react-redux";
import { closeFilterBlock } from "../../features/options/optionsSlice";
import { OptionsFilter as Presentational } from "./presentational";

const mapStateToProps = () => {};

const mapDispatchToProps = (dispatch) => ({
	onClose: () => dispatch(closeFilterBlock()),
});

export default connect(null, mapDispatchToProps)(Presentational);
