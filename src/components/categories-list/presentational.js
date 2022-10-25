import React, { useEffect } from "react";
import CheckIcon from "../icons/check-icon";

export const CategoriesList = ({
	categories,
	getCategories,
	setCategories,
}) => {
	useEffect(() => {
		getCategories();
	}, []);

	const changeChecked = (categories, target) => {
		return categories.map((category) => {
			if (category.value === target.value) {
				return {
					...category,
					checked: !category.checked,
				};
			}
			return category;
		});
	};

	const handleCheck = (category) => {
		let newCategories = [...categories];
		const foundCategory = newCategories.find(
			({ value }) => category.value === value
		);
		if (!foundCategory) {
			return;
		}
		newCategories = changeChecked(newCategories, foundCategory);
		setCategories(newCategories);
	};

	return (
		<div>
			{categories.map((category, index) => (
				<div
					key={index}
					className="flex items-center justify-between p-2 my-4 text-md first:mt-0"
					onClick={() => handleCheck(category)}
				>
					<div>{category.label}</div>
					<CheckIcon className="h-6 w-6" checked={category.checked} />
				</div>
			))}
		</div>
	);
};
