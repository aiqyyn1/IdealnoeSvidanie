import { connect } from "react-redux";
import { closeModal } from "../../../features/option-detail/optionDetailSlice";
import { OptionDetailModal as Presentational } from "./presentational";

const mapStateToProps = (state) => {
	const { show, data } = state.optionDetail;
	return {
		isOpen: show,
		option: data,
	};
};

const mapDispatchToProps = {
	closeModal,
};

export const OptionDetailModal = connect(
	mapStateToProps,
	mapDispatchToProps
)(Presentational);
