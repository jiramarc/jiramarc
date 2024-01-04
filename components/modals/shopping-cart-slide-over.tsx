"use client";

import { CreditCard, ShoppingBasketIcon } from "lucide-react";

import { ProductCardInCart } from "@/app/examples/e-commerce/components/product-card";
import { useShoppingCart } from "@/app/examples/e-commerce/use-shopping-cart";
import { SlideOver } from "@/components/modals/slide-over";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

type ShoppingCartSlideOverProps = {};

const ShoppingCartSlideOver = ({}: ShoppingCartSlideOverProps) => {
	const shoppingCart = useShoppingCart();
	return (
		<SlideOver
			title={`Shopping Cart (${shoppingCart.products.length})`}
			description="Checkout the items in your shopping cart."
			isOpen={shoppingCart.isOpen}
			onClose={() => shoppingCart.onClose()}>
			<ScrollArea className="h-full max-h-[calc(100vh-10rem)]">
				<div className="flex flex-col justify-between space-y-4 pr-3">
					{/* PRODUCTS */}
					<div className="divide-y">
						{shoppingCart.products.map((product, index) => (
							<ProductCardInCart
								key={index}
								product={product}
							/>
						))}
					</div>
				</div>
				<ScrollBar
					orientation="vertical"
					className="invisible"
				/>
			</ScrollArea>
			{/* CHECKOUT BUTTON */}
			<div className="">
				<Button
					variant={shoppingCart.products.length === 0 ? "secondary" : "default"}
					className="w-full"
					onClick={() => shoppingCart.onClose()}>
					{shoppingCart.products.length === 0 ? (
						<>
							<ShoppingBasketIcon className="mr-2 h-4 w-4" />
							Back to shop
						</>
					) : (
						<>
							<CreditCard className="mr-2 h-4 w-4" />
							Checkout
						</>
					)}
				</Button>
			</div>
		</SlideOver>
	);
};

export { ShoppingCartSlideOver };
