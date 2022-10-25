import React from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function FilterItem({ title, onClick }) {
	return (
		<div className="text-lg my-4" onClick={onClick}>
			<div className="flex items-center justify-between">
				<div>{title}</div>
				<div className="flex items-center justify-end">
					<div className="text-gray-400">chosen item</div>
					<ChevronRightIcon className="w-10 h-10 text-gray-300" />
				</div>
			</div>
		</div>
	);
}
