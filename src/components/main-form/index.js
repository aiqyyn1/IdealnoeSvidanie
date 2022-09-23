import React from "react";
import Select from "../common/select";
import * as strings from "./strings";

export default function MainForm() {
	return (
		<div>
			<div className="text-l font-semibold">{strings.TITLE}</div>
			<div className="text-s">{strings.SUB_TITLE}</div>

			<Select />
		</div>
	);
}
