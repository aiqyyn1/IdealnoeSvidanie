const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			screens: {
				xs: { min: "0px", max: "450px" },
				...defaultTheme.screens,
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
