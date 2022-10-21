import { connect } from "react-redux";
import { OptionCard as Presentational } from "./presentational";
import { showModal } from "../../features/option-detail/optionDetailSlice";

const mapDispatchToProps = (dispatch) => ({
	showModal: (data) => dispatch(showModal(data)),
});

export default connect(null, mapDispatchToProps)(Presentational);
