"use client";

import { MinusIcon, PlusIcon, ShoppingBasketIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { Product } from "../data";
import { ProductInCart, useShoppingCart } from "../use-shopping-cart";

type ProductCardInCartProps = React.HTMLAttributes<HTMLDivElement> & {
	product: ProductInCart;
};

const ProductCardInCart = ({ product, className, ...props }: ProductCardInCartProps) => {
	const shoppingCart = useShoppingCart();

	const handleIncreaseQuantity = (productId: string) => {
		shoppingCart.increaseQuantity(product.id);
		toast.success("Product added to cart");
	};

	const handleDecreaseQuantity = (productId: string) => {
		shoppingCart.removeFromCart(product.id);
		toast.success("Product removed from cart");
	};

	return (
		<div className="flex py-6">
			{/* PRODUCY CARD :: IMAGE */}
			<div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
				<Image
					src={product.image}
					alt={product.name}
					width={512}
					height={512}
					className="h-full w-full object-cover object-center"
				/>
			</div>

			{/* PRODUCT CARD :: TITLE */}
			<div className="ml-4 flex flex-col flex-1">
				<div>
					<div className="flex justify-between text-sm font-medium text-gray-900">
						<h3 className="line-clamp-2 text-sm">
							<Link href="#">{product.name}</Link>
						</h3>
						<p className="ml-4">${product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
					</div>
				</div>
				<div className="flex flex-1 items-center justify-between text-sm">
					<p className="text-gray-500">Qty {product.quantity}</p>

					<div className="flex gap-2">
						<Button
							variant="secondary"
							size="icon"
							onClick={() => handleIncreaseQuantity(product.id)}>
							<PlusIcon className="h-4 w-4" />
						</Button>
						<Button
							variant="secondary"
							size="icon"
							onClick={() => handleDecreaseQuantity(product.id)}>
							<MinusIcon className="h-4 w-4" />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

type ProductCardProps = React.HTMLAttributes<HTMLDivElement> & {
	product: Product | ProductInCart;
};

const ProductCard = ({ product, className, ...props }: ProductCardProps) => {
	const shoppingCart = useShoppingCart();

	const handleAddToCart = (product: Product) => {
		toast.success("Product added to cart");
		shoppingCart.addToCart(product);
		shoppingCart.onOpen();
	};

	return (
		<div className="group rounded-lg transition-all shadow-md hover:shadow-lg">
			<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
				<Image
					src={product.image}
					alt={product.name}
					width={500}
					height={500}
					className="h-96 w-full"
				/>
			</div>
			<div className="flex items-center justify-between p-4 mt-4">
				<div className="flex flex-col gap-1">
					<h3 className="text-base font-medium">{product.name}</h3>
					<p className="text-muted-foreground">${product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
				</div>
				<TooltipProvider>
					<Tooltip delayDuration={100}>
						<TooltipTrigger asChild>
							<Button
								className="transition-all"
								variant={shoppingCart.products.filter((p) => p.id === product.id).length > 0 ? "default" : "secondary"}
								onClick={() => handleAddToCart(product)}>
								<ShoppingBasketIcon className={cn("h-4 w-4", shoppingCart.products.filter((p) => p.id === product.id).length ? "mr-2" : "")} />
								{shoppingCart.products.find((p) => p.id === product.id) ? shoppingCart.products.find((p) => p.id === product.id)?.quantity : null}
							</Button>
						</TooltipTrigger>
						<TooltipContent>
							<p>Add to cart</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>
		</div>
	);
};

export { ProductCard, ProductCardInCart };
