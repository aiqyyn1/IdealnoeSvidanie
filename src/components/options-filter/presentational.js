import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import InputField from "../common/input-field";
import Button from "../common/button";
import RadioButtons from "../common/radio-buttons";
import CategoriesList from "./components/categories-list";
import FilterItemButton from "./components/filter-item-button";
import FilterItemDetail from "./components/filter-item-detail";
import { CITIES, ITEM_FILTER } from "../../constants";
import { FILTER_TITLE, PRICE } from "./strings";

export const OptionsFilter = ({ onClose }) => {
	const [filterItemOpen, setFilterItemOpen] = useState(ITEM_FILTER.default);

	const handleFilterItem = (value) => {
		setFilterItemOpen(value);
	};

	return (
		<div className="h-screen w-full bg-white fixed top-0">
			<div className="bg-white fixed top-0 w-full">
				<XMarkIcon
					className="w-8 h-8 font-semibold absolute top-4 left-2"
					onClick={onClose}
				/>
				<div className="text-xl font-semibold text-center mt-4">
					{FILTER_TITLE}
				</div>
			</div>

			<div className="py-4 pl-4 pr-2 mt-12">
				<FilterItemButton
					title="Категории"
					onClick={() => handleFilterItem(ITEM_FILTER.CATEGORIES)}
				/>
				<FilterItemButton
					title="Город"
					onClick={() => handleFilterItem(ITEM_FILTER.CITY)}
				/>

				<div className="mt-8">
					<div className="text-lg mb-2 font-medium">{PRICE}</div>
					<div className="flex items-center gap-4">
						<InputField isCurrency isOnlyNumber label="От" placeholder="0" />
						<InputField isCurrency isOnlyNumber label="До" placeholder="0" />
					</div>
				</div>
			</div>

			<div className="fixed bottom-8 w-full w-4/5 left-1/2 -translate-x-1/2">
				<Button
					title="Показать результаты"
					bgColor="bg-orange-500"
					hover="hover:bg-orange-600"
					paddingX="px-10"
					paddingY="py-4"
					fontSize="text-lg"
				/>
			</div>
			{filterItemOpen === ITEM_FILTER.CATEGORIES && (
				<FilterItemDetail
					onClickReady={() => {
						alert("network request");
						handleFilterItem(ITEM_FILTER.default);
					}}
					goBack={() => handleFilterItem(ITEM_FILTER.default)}
				>
					<CategoriesList />
				</FilterItemDetail>
			)}
			{filterItemOpen === ITEM_FILTER.CITY && (
				<FilterItemDetail
					onClickReady={() => {
						alert("network request");
						handleFilterItem(ITEM_FILTER.default);
					}}
					goBack={() => handleFilterItem(ITEM_FILTER.default)}
				>
					<RadioButtons options={CITIES} isWithBorder={false} />
				</FilterItemDetail>
			)}
		</div>
	);
};
