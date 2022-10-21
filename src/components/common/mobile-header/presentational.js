import React from "react";
import {
	AdjustmentsHorizontalIcon,
	ChevronLeftIcon,
} from "@heroicons/react/20/solid";
import InputField from "../input-field";

const Header = () => {
	return (
		<div className="flex items-center justify-between pr-4 py-2 w-full fixed top-0 bg-white sm:hidden">
			<ChevronLeftIcon className="w-10 h-10 text-orange-400" />
			<div>
				<InputField placeholder="Поиск" />
			</div>
			<AdjustmentsHorizontalIcon className="w-8 h-7 text-orange-400" />
		</div>
	);
};

export default Header;
