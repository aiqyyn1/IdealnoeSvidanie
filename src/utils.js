export const classNames = (...classes) => {
	return classes.filter(Boolean).join(" ");
};

export const toValidCost = (price) =>
	price.toString().replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g, "$1 ");
