import React from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { toValidCost } from "../../utils";

export const OptionCard = ({ option, showModal }) => {
	const openModal = () => {
		if (option) {
			showModal(option);
		}
	};

	return (
		<div className="shadow-md rounded-2xl h-72" onClick={openModal}>
			<img
				src={option.img}
				className="h-40 object-cover w-full rounded-t-2xl"
			/>
			<div className="p-3">
				<div>{option.name}</div>
				<div className="mt-2 flex items-center justify-between">
					<div>
						<div className="text-sm font-light whitespace-nowrap overflow-hidden text-ellipsis">
							Примерно тут потратишь на двоих:
						</div>
						<div className="mt-2 font-medium">
							{toValidCost(option.price)} ₸
						</div>
					</div>
					{/* {option.additionalOptions.length > 0 && (
						<PlusCircleIcon className="h-10 w-10 cursor-pointer text-orange-400 hover:text-orange-500" />
					)} */}
				</div>
			</div>
		</div>
	);
};
