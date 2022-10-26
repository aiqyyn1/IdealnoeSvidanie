import React from "react";
import { RadioGroup } from "@headlessui/react";
import CheckIcon from "../../icons/check-icon";

export default function RadioButtons({
	label = "",
	options = [],
	selected,
	setSelected,
	isWithBorder = true,
}) {
	return (
		<div className={`w-full ${isWithBorder && "px-4"} pb-8 pt-4`}>
			<div className="mx-auto w-full max-w-md">
				<RadioGroup value={selected} onChange={setSelected}>
					<RadioGroup.Label className="text-lg font-semibold">
						{label}
					</RadioGroup.Label>
					<div className="space-y-2 mt-4">
						{options.map((option) => (
							<RadioGroup.Option
								key={option.value}
								value={option.value}
								className={`relative flex cursor-pointer rounded-lg ${
									isWithBorder && "px-5"
								} py-4 ${isWithBorder && "shadow-md"} focus:outline-none`}
							>
								{({ _, checked }) => (
									<>
										<div className="flex w-full items-center justify-between">
											<div className="flex items-center">
												<div className="text-lg">
													<RadioGroup.Label
														as="p"
														className={`font-medium text-gray-900 ${
															checked ? "text-white" : "text-gray-900"
														}`}
													>
														{option.label}
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
