"use client";

import { ShoppingBasketIcon } from "lucide-react";

import { Logo } from "@/components/sites/logo";
import { ThemeSwitcher } from "@/components/switchers/theme-switcher";
import { Button } from "@/components/ui/button";

import { useShoppingCart } from "../use-shopping-cart";
import { MainNav } from "./main-nav";

type ECommerceNavBarProps = {};

const ECommerceNavBar = ({}: ECommerceNavBarProps) => {
	const shoppingCart = useShoppingCart();

	return (
		<div className="flex flex-col">
			<div className="flex flex-row items-center justify-between h-16 px-4 border-b gap-4">
				{/* LOGO */}
				<div className="flex">
					<Logo
						name="E-Commerce"
						href="/examples/e-commerce"
					/>
				</div>

				{/* NAV */}
				<div className="flex flex-1 justify-center">
					<MainNav />
				</div>

				{/* CART */}
				<div className="flex gap-2">
					<Button
						variant={shoppingCart.products.length > 0 ? "default" : "ghost"}
						onClick={() => {
							shoppingCart.onOpen();
						}}>
						<ShoppingBasketIcon className="mr-2 h-4 w-4" />
						{shoppingCart.products.map((p) => p.quantity).reduce((a, b) => a + b, 0)}
					</Button>
					<ThemeSwitcher />
				</div>
			</div>
		</div>
	);
};

export { ECommerceNavBar };
