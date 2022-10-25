import { connect } from "react-redux";
import { setFilterCategoriesList } from "../../features/options/optionsSlice";
import { getFilterCategories } from "../../features/options/actions";
import { CategoriesList as Presentational } from "./presentational";

const mapStateToProps = (state) => {
	const { list, loading } = state.options.filter.categories;
	return {
		categories: list,
		loading,
	};
};

const mapDispatchToProps = (dispatch) => ({
	getCategories: () => dispatch(getFilterCategories()),
	setCategories: (data) => dispatch(setFilterCategoriesList(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Presentational);
