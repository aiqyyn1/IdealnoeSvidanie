import React from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Accordion from "../common/accordion";
import CategoriesList from "../categories-list";

export const OptionsFilter = ({ onClose }) => {
	return (
		<div className="h-screen w-full bg-white fixed top-0">
			<XMarkIcon
				className="w-10 h-10 font-semibold absolute top-4 left-2"
				onClick={onClose}
			/>
			<div className="text-2xl font-semibold text-center mt-4">Фильтр</div>

			<div className="mt-4">
				<Accordion title="Категории">
					<CategoriesList />
				</Accordion>
			</div>
		</div>
	);
};
