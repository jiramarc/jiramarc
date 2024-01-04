import { create } from "zustand";
import { Product } from "./data";

type ProductInCart = Product & {
	quantity: number;
};

type UseShoppingCart = {
	// SHOPPING CART SLIDE OVER
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
	// PRODUCTS
	products: ProductInCart[];
	addToCart: (product: Product) => void;
	increaseQuantity: (productId: string) => void;
	removeFromCart: (productId: string) => void;
};

const useShoppingCart = create<UseShoppingCart>((set) => ({
	// SHOPPING CART SLIDE OVER
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
	// PRODUCTS
	products: [],
	addToCart: (product) =>
		set((state) => {
			if (state.products.find((p) => p.id === product.id)) {
				return {
					products: state.products.map((p) => (p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p)),
				};
			}
			return {
				products: [...state.products, { ...product, quantity: 1 }],
			};
		}),
	increaseQuantity: (productId) =>
		set((state) => ({
			products: state.products.map((p) => (p.id === productId ? { ...p, quantity: p.quantity + 1 } : p)),
		})),
	removeFromCart: (productId) =>
		set((state) => {
			if (state.products.find((p) => p.id === productId)) {
				if (state.products.find((p) => p.id === productId)?.quantity === 1) {
					return {
						products: state.products.filter((p) => p.id !== productId),
					};
				} else {
					return {
						products: state.products.map((p) => (p.id === productId ? { ...p, quantity: p.quantity - 1 } : p)),
					};
				}
			}
			return {
				products: state.products.filter((p) => p.id !== productId),
			};
		}),
}));

export { useShoppingCart, type ProductInCart };
