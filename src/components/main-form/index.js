import React from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import Select from "../common/select";
import InputField from "../common/input-field";
import Button from "../common/button";
import Logo from "../icons/logo";
import { CITIES, ROUTES } from "../../constants";
import * as strings from "./strings";

export default function MainForm() {
	const navigate = useNavigate();

	const handleSearch = () => {
		navigate({
			pathname: ROUTES.OPTIONS,
			search: createSearchParams({
				city: "almaty",
				age: 20,
				from: 10000,
				to: 15000,
			}).toString(),
		});
	};

	return (
		<div className="w-full h-full flex justify-center items-center flex-col">
			<div className="flex justify-start items-center mb-14">
				<Logo width={150} height={150} />
			</div>
			<div className="flex justify-center items-center">
				<div className="w-4/5">
					<div className="text-lg font-semibold">{strings.TITLE}</div>
					<div className="text-xs mt-2">{strings.SUB_TITLE}</div>

					<div className="w-2/3 mt-5 xs:w-full">
						<Select options={CITIES} label={strings.CHOOSE_CITY} />
					</div>
					<div className="w-2/3 mt-5 xs:w-full">
						<InputField label="Возраст" placeholder="0" />
					</div>

					<div className="text-sm font-semibold mt-5">
						{strings.BUDGET_TITLE}
					</div>
					<div className="flex items-center mt-5 gap-5 xs:flex-col">
						<InputField label={strings.PRICE_FROM} placeholder="0" isCurrency />
						<InputField label={strings.PRICE_TO} placeholder="0" isCurrency />
					</div>
					<div className="w-1/5 mt-7 xs:w-full">
						<Button
							title={strings.SEARCH}
							bgColor="bg-orange-500"
							hover="hover:bg-orange-600"
							paddingX="px-10"
							paddingY="py-2"
							onClick={handleSearch}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
