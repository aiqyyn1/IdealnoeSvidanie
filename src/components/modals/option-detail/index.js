import { connect } from "react-redux";
import { OptionDetailModal as Presentational } from "./presentational";

const mapStateToProps = (state) => {
	return {
		isOpen: state.optionDetail.show,
	};
};

const mapDispatchToProps = (dispatch) => {};

export const OptionDetailModal = connect(Presentational)(
	mapStateToProps,
	mapDispatchToProps
);
