import React from "react";
import {
	InputLabel,
	MenuItem,
	FormControl,
	Select,
	InputBase,
	Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// const BootstrapInput = styled(InputBase)(({ theme }) => ({
// 	"& .MuiInputBase-input": {
// 		borderRadius: 12,
// 		// position: "relative",
// 		backgroundColor: theme.palette.background.paper,
// 		border: "2px solid #E4E4E4",
// 		fontSize: 16,
// 		padding: "10px 26px 10px 12px",
// 		transition: theme.transitions.create(["border-color", "box-shadow"]),
// 		"&:focus": {
// 			borderRadius: 12,
// 			borderColor: "#80bdff",
// 			boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
// 			backgroundColor: theme.palette.background.paper,
// 		},
// 	},
// }));

const CustomSelect = styled(Select)(({ theme }) => ({
	"& .MuiInputBase-root": {
		"&:focus-visible": {
			borderColor: "#FF7A00",
			// boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
		},
	},
}));

export const SelectComponent = ({
	onChange,
	value = "",
	label = "",
	options = [],
	isFullWidth = false,
}) => {
	return (
		<FormControl fullWidth={isFullWidth} variant="outlined">
			<InputLabel>{label}</InputLabel>
			<CustomSelect
				value={value}
				label={label}
				onChange={onChange}
				// input={<BootstrapInput />}
			>
				{options.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						{option.label}
					</MenuItem>
				))}
			</CustomSelect>
		</FormControl>
	);
};
