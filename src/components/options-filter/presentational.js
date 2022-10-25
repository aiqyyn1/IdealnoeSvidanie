import React from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Accordion from "../common/accordion";
import Select from "../common/select";
import InputField from "../common/input-field";
import CategoriesList from "../categories-list";
import Button from "../common/button";
import { CITIES } from "../../constants";

export const OptionsFilter = ({ onClose }) => {
	return (
		<div className="h-screen w-full bg-white fixed top-0 overflow-scroll">
			<div className="bg-white fixed top-0 w-full">
				<XMarkIcon
					className="w-10 h-10 font-semibold absolute top-4 left-2"
					onClick={onClose}
				/>
				<div className="text-2xl font-semibold text-center mt-4">Фильтр</div>
			</div>

			<div className="p-4 mt-12">
				<div className="mt-4">
					<Accordion title="Категории">
						<CategoriesList />
					</Accordion>
				</div>
				<div className="mt-8">
					<Select
						label="Город"
						options={CITIES}
						borderStyle="rounded-2xl"
						paddingYBtn="py-4"
						labelSize="text-xl"
					/>
				</div>
				<div className="mt-8 flex items-center gap-4">
					<InputField
						isCurrency
						isOnlyNumber
						label="От"
						placeholder="0"
						fontSize="text-lg"
					/>
					<InputField
						isCurrency
						isOnlyNumber
						label="До"
						placeholder="0"
						fontSize="text-lg"
					/>
				</div>
			</div>

			<div className="fixed bottom-8 w-full w-4/5 left-1/2 -translate-x-1/2">
				<Button
					title="Применить"
					bgColor="bg-orange-500"
					hover="hover:bg-orange-600"
					paddingX="px-10"
					paddingY="py-4"
					fontSize="text-lg"
				/>
			</div>
		</div>
	);
};
