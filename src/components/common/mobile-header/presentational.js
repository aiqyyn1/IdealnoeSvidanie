import React from "react";
import { useNavigate } from "react-router-dom";
import {
	AdjustmentsHorizontalIcon,
	ArrowsUpDownIcon,
	ChevronLeftIcon,
} from "@heroicons/react/20/solid";
import InputField from "../input-field";

const Header = () => {
	const navigate = useNavigate();
	return (
		<div className="flex items-center justify-between pr-4 py-2 w-full fixed top-0 bg-white sm:hidden">
			<ChevronLeftIcon
				className="w-10 h-10 text-orange-400"
				onClick={() => navigate(-1)}
			/>
			<div>
				<InputField
					name="search"
					placeholder="Поиск"
					bg="bg-gray-100 border-gray-100"
				/>
			</div>
			<ArrowsUpDownIcon className="w-8 h-7 text-orange-400" />
			<AdjustmentsHorizontalIcon className="w-8 h-7 text-orange-400" />
		</div>
	);
};

export default Header;
