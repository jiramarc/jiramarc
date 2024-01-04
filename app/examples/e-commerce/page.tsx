import { Metadata } from "next";

import { Separator } from "@/components/ui/separator";

import { ShoppingCartSlideOver } from "@/components/modals/shopping-cart-slide-over";

import { ECommerceNavBar } from "./components/e-commerce-nav-bar";
import { ProductCard } from "./components/product-card";
import { products } from "./data";

export const metadata: Metadata = {
	title: "E-commerce",
	description: "Example of e-commerce built using the components.",
};

type ExampleECommercePageProps = {};

const ExampleECommercePage = ({}: ExampleECommercePageProps) => {
	return (
		<section className="border rounded-lg">
			{/* NAVIGATION BAR */}
			<ECommerceNavBar />

			{/* PRODUCTS */}
			<div className="flex-1 space-y-4 p-8">
				<div className="flex flex-col items-center justify-center space-y-2 py-10">
					<h2 className="text-3xl sm:text-4xl font-bold tracking-tight">BEST GADGET OF THE YEAR</h2>
					<p className="text-muted-foreground">ที่สุดของแกดเจ็ตแห่งปีที่คุณห้ามพลาด</p>
				</div>

				<Separator className="my-2" />

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
					{products.map((product, index) => (
						<ProductCard
							key={index}
							product={product}
						/>
					))}
				</div>
			</div>

			{/* SLIDE OVER :: SHOPPING CART */}
			<ShoppingCartSlideOver />
		</section>
	);
};

export default ExampleECommercePage;
