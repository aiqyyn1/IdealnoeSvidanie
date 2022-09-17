export const citiesToMuiFormat = (cities = []) => {
	return cities.map((city) => ({ label: city, value: city.toLowerCase() }));
};
