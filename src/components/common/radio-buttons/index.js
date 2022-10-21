import React, { useState } from "react";
import { RadioGroup } from "@headlessui/react";
const plans = [
	{
		name: "Startup",
		ram: "12GB",
		cpus: "6 CPUs",
		disk: "160 GB SSD disk",
	},
	{
		name: "Business",
		ram: "16GB",
		cpus: "8 CPUs",
		disk: "512 GB SSD disk",
	},
	{
		name: "Enterprise",
		ram: "32GB",
		cpus: "12 CPUs",
		disk: "1024 GB SSD disk",
	},
];

export default function Example() {
	const [selected, setSelected] = useState(plans[0]);

	return (
		<div className="w-full px-4 pb-8 pt-4">
			<div className="mx-auto w-full max-w-md">
				<RadioGroup value={selected} onChange={setSelected}>
					<RadioGroup.Label className="text-lg font-semibold">
						Сортировка
					</RadioGroup.Label>
					<div className="space-y-2 mt-4">
						{plans.map((plan) => (
							<RadioGroup.Option
								key={plan.name}
								value={plan}
								className={({ active, checked }) =>
									`

                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
								}
							>
								{/* ${
										active
											? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
											: ""
									} */}
								{({ active, checked }) => (
									<>
										<div className="flex w-full items-center justify-between">
											<div className="flex items-center">
												<div className="text-sm">
													<RadioGroup.Label
														as="p"
														className={`font-medium text-gray-900 ${
															checked ? "text-white" : "text-gray-900"
														}`}
													>
														{plan.name}
													</RadioGroup.Label>
												</div>
											</div>

											<CheckIcon className="h-6 w-6" checked={checked} />
										</div>
									</>
								)}
							</RadioGroup.Option>
						))}
					</div>
				</RadioGroup>
			</div>
		</div>
	);
}

function CheckIcon(props) {
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
