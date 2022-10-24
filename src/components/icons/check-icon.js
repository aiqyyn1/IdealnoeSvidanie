import React from "react";

export default function CheckIcon(props) {
	return (
		<svg
			viewBox="-1 -1 26 25"
			fill="none"
			stroke={props.checked ? "#fff" : "#D3D3D3"}
			strokeWidth={1}
			{...props}
		>
			<circle
				cx={12}
				cy={12}
				r={12}
				fill={props.checked ? "#f97316" : "#fff"}
				opacity="1"
			/>
			<path
				d="M7 13l3 3 7-7"
				stroke="#fff"
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
