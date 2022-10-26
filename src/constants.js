export const CITIES = [
	{ label: "Алматы", value: "almaty" },
	{ label: "Астана", value: "astana" },
	{ label: "Шымкент", value: "shymkent" },
];

export const ROUTES = {
	MAIN: "/",
	OPTIONS: "/options",
};

export const SORTING_OPTIONS = [
	{
		label: "Сначала дешевые",
		value: "cheap",
	},
	{
		label: "Сначала дорогие",
		value: "expensive",
	},
];

export const ITEM_FILTER = {
	default: null,
	CATEGORIES: "categories",
	CITY: "city",
};

// Below all consts are mock data till BE is ready
export const options = [
	{
		id: 1,
		name: "First place",
		price: 15000,
		img: "https://almaty.ppz.kz/upload/iblock/220/220382c16d8e0306da0b066674e69ac4.jpg",
		additionalOptions: [],
	},
	{
		id: 2,
		name: "Second place",
		price: 14000,
		img: "https://almaty.ppz.kz/upload/iblock/196/196648220a8802ae7e427cf5c2f8f202.jpg",
		additionalOptions: [],
	},
	{
		id: 3,
		name: "Third place",
		price: 10000,
		img: "https://restolife.kz/upload/information_system_6/1/6/1/item_16182/information_items_property_18092.jpg",
		additionalOptions: [
			{
				id: 112,
				name: "Third additional place",
				price: 7000,
				address: "Panfilov 90",
				img: "https://almaty.ppz.kz/upload/iblock/196/196648220a8802ae7e427cf5c2f8f202.jpg",
			},
			{
				id: 142,
				name: "Fourth additional place",
				price: 5000,
				address: "Al Farabi 19",
				img: "https://almaty.ppz.kz/upload/iblock/196/196648220a8802ae7e427cf5c2f8f202.jpg",
			},
			{
				id: 150,
				name: "Fifths additional place",
				price: 4000,
				address: "Zheltoksan 19",
				img: "https://almaty.ppz.kz/upload/iblock/4f0/4f05cfe13e1c754b42d6913fcca2cb0f.jpg",
			},
		],
	},
	{
		id: 14,
		name: "Fourth place",
		price: 12000,
		img: "https://sxodim.com/uploads/posts/2021/11/26/optimized/c48c9d5a896e39fcc601f0d59f754845_545x305-q-85.jpg",
		additionalOptions: [],
	},
	{
		id: 188,
		name: "Fourth place",
		price: 10000,
		img: "https://almaty.ppz.kz/upload/iblock/4f0/4f05cfe13e1c754b42d6913fcca2cb0f.jpg",
		additionalOptions: [],
	},
];

export const CATEGORIES = [
	{
		label: "Парки",
		value: "parks",
		checked: true,
	},
	{
		label: "Кафе и рестораны",
		value: "food",
		checked: true,
	},
	{
		label: "Кинотеатр",
		value: "cinema",
		checked: true,
	},
	{
		label: "Аутсайд",
		value: "outside",
		checked: true,
	},
	{
		label: "Гостиницы и отели",
		value: "hotels",
		checked: true,
	},
	{
		label: "Бары",
		value: "bars",
		checked: true,
	},
	{
		label: "Арт-студии",
		value: "art-studios",
		checked: true,
	},
];
