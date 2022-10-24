import { createAsyncThunk } from "@reduxjs/toolkit";
import { CATEGORIES } from "../../constants";

export const getFilterCategories = createAsyncThunk(
	"options/getCategories",
	async () => {
		// const res = await fetch("https://jsonplaceholder.typicode.com/posts").then(
		// 	(data) => data.json()
		// );
		// return res;
		return CATEGORIES;
	}
);
