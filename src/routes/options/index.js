import React from "react";
import { Route, useLocation } from "react-router-dom";
import Select from "../../components/common/select";
import InputField from "../../components/common/input-field";
import Button from "../../components/common/button";
import { CITIES } from "../../constants";
import OptionCard from "../../components/option-card";

const options = [
	{
		id: 1,
		name: "First place",
		price: 15000,
		img: "https://almaty.ppz.kz/upload/iblock/220/220382c16d8e0306da0b066674e69ac4.jpg",
		additionalOptions: [],
	},
	// {
	//   id: 2,
	// 	name: "Second place",
	// 	price: 14000,
	// 	img: "https://almaty.ppz.kz/upload/iblock/196/196648220a8802ae7e427cf5c2f8f202.jpg",
	// 	additionalOptions: [],
	// },
	{
		id: 3,
		name: "Third place",
		price: 10000,
		img: "https://restolife.kz/upload/information_system_6/1/6/1/item_16182/information_items_property_18092.jpg",
		additionalOptions: [
			{
				id: 112,
				name: "Third additional place",
				price: 7000,
				img: "https://almaty.ppz.kz/upload/iblock/196/196648220a8802ae7e427cf5c2f8f202.jpg",
			},
		],
	},
	{
		id: 14,
		name: "Fourth place",
		price: 12000,
		img: "https://sxodim.com/uploads/posts/2021/11/26/optimized/c48c9d5a896e39fcc601f0d59f754845_545x305-q-85.jpg",
		additionalOptions: [],
	},
	{
		id: 188,
		name: "Fourth place",
		price: 10000,
		img: "https://almaty.ppz.kz/upload/iblock/4f0/4f05cfe13e1c754b42d6913fcca2cb0f.jpg",
		additionalOptions: [],
	},
];

export default function Options() {
	const TITLE = "Список лучших вариантов для вас";
	const { search } = useLocation();
	const searchAsObject = Object.fromEntries(new URLSearchParams(search));
	const city = CITIES.find((city) => city.value === searchAsObject?.city);

	return (
		<div className="mx-8 my-8">
			<div className="text-lg font-medium">
				{TITLE} <span className="text-orange-500">в {city?.label}</span>
			</div>
			<div className="flex items-center justify-between mt-10 xs:mt-5 xs:flex-col">
				<div className="w-1/4 xs:w-full xs:order-2 xs:mt-5">
					<Select options={CITIES} label="Категория" />
				</div>
				<div className="w-1/2 mt-5 xs:w-full xs:mt-0">
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
	);
}
