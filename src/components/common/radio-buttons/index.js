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
					<RadioGroup.Label className="text-xl font-semibold">
						Сортировка
					</RadioGroup.Label>
					<div className="space-y-2 mt-4">
						{plans.map((plan) => (
							<RadioGroup.Option
								key={plan.name}
								value={plan}
								className="bg-white relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none"
							>
								{({ active, checked }) => (
									<>
										<div className="flex w-full items-center justify-between">
											<div className="shrink-0 text-white">
												<CheckIcon className="h-6 w-6" />
											</div>
											<div className="flex items-center">
												<div className="text-sm">
													<RadioGroup.Label
														as="p"
														className={`font-medium  ${
															checked ? "text-white" : "text-gray-900"
														}`}
													>
														{plan.name}
													</RadioGroup.Label>
												</div>
											</div>
											{/* {checked && ( */}

											{/* )} */}
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
	// <svg viewBox="0 0 24 24" fill="none" {...props}>
	// 	<circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
	// 	<path
	// 		d="M7 13l3 3 7-7"
	// 		stroke="#fff"
	// 		strokeWidth={1.5}
	// 		strokeLinecap="round"
	// 		strokeLinejoin="round"
	// 	/>
	// </svg>
	return (
		<>
			<input
				id="red-radio"
				type="radio"
				value=""
				name="colored-radio"
				class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
			/>
			<label
				for="red-radio"
				class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
			>
				Red
			</label>
		</>
	);
}
