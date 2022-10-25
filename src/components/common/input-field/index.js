import React from "react";

export default function InputField({
	label = "",
	placeholder,
	name,
	isCurrency,
	isOnlyNumber,
	bg = "",
	padding = "",
	fontSize = "",
	value,
	onChange,
}) {
	return (
		<div className="w-full">
			<label
				htmlFor={name}
				className={`block ${fontSize || "text-sm"} font-medium text-gray-700`}
			>
				{label}
			</label>
			<div className="relative mt-1 rounded-md shadow-sm">
				<input
					type={isOnlyNumber ? "number" : "text"}
					name={name}
					id={name}
					className={`block w-full rounded-md border-gray-300 pl-5 pr-12 focus:border-orange-500 focus:ring-orange-500 text-lg ${bg} ${padding}`}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
				/>
				{isCurrency && (
					<div className="absolute inset-y-0 right-0 flex items-center">
						<div className="h-full py-2 pr-5 text-gray-500 sm:text-sm">₸</div>
					</div>
				)}
			</div>
		</div>
	);
}
