import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { FILTER_TITLE, READY } from "../../strings";

export default function FilterItemDetail({ children, onClickReady, goBack }) {
	return (
		<div>
			<div className="flex items-center justify-between w-full pr-4 py-4 fixed top-0 bg-white text-lg z-10">
				<ChevronLeftIcon
					className="w-10 h-10 text-orange-400"
					onClick={goBack}
				/>
				<div className="font-semibold">{FILTER_TITLE}</div>
				<div className="text-orange-400 font-semibold" onClick={onClickReady}>
					{READY}
				</div>
			</div>
			<div className="h-screen w-full bg-white fixed top-20 overflow-auto px-4">
				{children}
			</div>
		</div>
	);
}
