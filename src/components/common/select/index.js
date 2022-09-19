import React from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SelectComponent = ({
	onChange,
	value = "",
	label = "",
	options = [],
	isFullWidth = false,
}) => {
	return (
		<FormControl fullWidth={isFullWidth}>
			<InputLabel>{label}</InputLabel>
			<Select value={value} label={label} onChange={onChange}>
				{options.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						{option.label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};
