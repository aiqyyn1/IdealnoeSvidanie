import React from "react";

export default function Button({
	title = "",
	bgColor = "",
	bgGradient = "",
	hover = "",
	paddingY = "",
	paddingX = "",
	fontSize,
	onClick,
}) {
	return (
		<div className="rounded-2xl shadow" onClick={onClick}>
			<div
				className={`flex w-full items-center justify-center rounded-2xl border-transparent ${bgColor} ${bgGradient} ${paddingY} ${paddingX} ${
					fontSize || "text-sm"
				} font-medium text-white cursor-pointer ${hover}`}
			>
				{title}
			</div>
		</div>
	);
}
