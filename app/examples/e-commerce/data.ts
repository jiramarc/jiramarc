export const products = [
	{
		id: "1",
		name: "Wireless Bluetooth Headphones",
		description: "This is a description of product 1",
		price: 198,
		categoty: "headphones",
		image: "/products/product-01.jpg",
	},
	{
		id: "2",
		name: "Airport Extreme Base Station",
		description: "This is a description of product 2",
		price: 98.5,
		category: "speakers",
		image: "/products/product-02.jpg",
	},
	{
		id: "3",
		name: `Smart TV OLED 49" Ultra HD`,
		description: "This is a description of product 3",
		price: 499,
		category: "tv",
		image: "/products/product-03.jpg",
	},
	{
		id: "4",
		name: "Smart Speaker with Voice Control",
		description: "This is a description of product 4",
		price: 49.99,
		category: "speakers",
		image: "/products/product-04.jpg",
	},
	{
		id: "5",
		name: "Fitness GPS Smart Watch",
		description: "This is a description of product 5",
		price: 317.4,
		category: "warable electronics",
		image: "/products/product-05.jpg",
	},
];

export type Product = (typeof products)[number];
