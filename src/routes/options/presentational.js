import React from "react";
import { useLocation } from "react-router-dom";
import { BottomSheet } from "react-spring-bottom-sheet";
import Select from "../../components/common/select";
import InputField from "../../components/common/input-field";
import Button from "../../components/common/button";
import OptionCard from "../../components/option-card";
import MainHeader from "../../components/common/main-header";
import RadioButtons from "../../components/common/radio-buttons";
import OptionsFilter from "../../components/options-filter";
import { CITIES, options, SORTING_OPTIONS } from "../../constants";

import "react-spring-bottom-sheet/dist/style.css";

export const Options = ({
	isOpenSheet,
	closeBottomSheet,
	sortingValue,
	setSorting,
	isOpenFilter,
}) => {
	const { search } = useLocation();
	const searchAsObject = Object.fromEntries(new URLSearchParams(search));
	const city = CITIES.find((city) => city.value === searchAsObject?.city);
	return (
		<div>
			<MainHeader />
			<div className="mx-8 mt-20 mb-6">
				<div className="text-lg font-medium">
					Лучшие варианты для свидания{" "}
					<span className="text-orange-500">в {city?.label}</span>
				</div>
				<div className="flex items-center justify-between mt-10 xs:mt-0 xs:flex-col">
					<div className="w-1/4 xs:w-full xs:order-2 xs:hidden">
						<Select options={CITIES} label="Категория" />
					</div>
					<div className="w-1/2 mt-5 xs:w-full xs:hidden">
						<InputField placeholder="Поиск" />
					</div>
					<div className="mt-5 xs:hidden">
						<Button
							title="Искать"
							bgColor="bg-orange-500"
							hover="hover:bg-orange-600"
							paddingX="px-10"
							paddingY="py-2"
						/>
					</div>
				</div>
				<div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-3">
					{options.map((option, index) => (
						<OptionCard key={index} option={option} />
					))}
				</div>
			</div>
			{isOpenFilter && <OptionsFilter />}
			<BottomSheet open={isOpenSheet} onDismiss={closeBottomSheet}>
				<RadioButtons
					label="Сортировка"
					options={SORTING_OPTIONS}
					selected={sortingValue}
					setSelected={setSorting}
				/>
			</BottomSheet>
		</div>
	);
};
