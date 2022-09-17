import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export const Select = ({ value = null, onChange, options = [], label }) => {
	return (
		<Autocomplete
			value={value}
			onChange={onChange}
			disablePortal
			options={options}
			sx={{ width: 300 }}
			renderInput={(params) => <TextField {...params} label={label} />}
		/>
	);
};
