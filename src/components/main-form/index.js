import React from "react";
import Select from "../common/select";
import InputField from "../common/input-field";
import Button from "../common/button";
import { CITIES } from "../../constants";
import * as strings from "./strings";

export default function MainForm() {
	return (
		<div className="w-full h-full flex justify-center items-center">
			<div className="w-4/5">
				<div className="text-lg font-semibold">{strings.TITLE}</div>
				<div className="text-xs mt-2">{strings.SUB_TITLE}</div>

				<div className="w-2/3 mt-5">
					<Select options={CITIES} />
				</div>
				<div className="w-2/3 mt-5">
					<InputField label="Возраст" placeholder="0" />
				</div>

				<div className="text-sm font-semibold mt-5">{strings.BUDGET_TITLE}</div>
				<div className="flex items-center mt-5 gap-5">
					<div>
						<InputField label={strings.PRICE_FROM} placeholder="0" isCurrency />
					</div>
					<div>
						<InputField label={strings.PRICE_TO} placeholder="0" isCurrency />
					</div>
				</div>
				<div className="w-1/5 mt-5">
					<Button
						title={strings.SEARCH}
						bgColor="bg-orange-500"
						hover="hover:bg-orange-600"
						paddingX="px-10"
						paddingY="py-2"
					/>
				</div>
			</div>
		</div>
	);
}
