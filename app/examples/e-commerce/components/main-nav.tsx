import Link from "next/link";

import { cn } from "@/lib/utils";

type MainNavProps = React.HTMLAttributes<HTMLElement> & {};

const MainNav = ({ className, ...props }: MainNavProps) => {
	return (
		<nav
			className={cn("hidden lg:flex items-center space-x-4 lg:space-x-6", className)}
			{...props}>
			<Link
				href="/examples/e-commerce"
				className="text-sm font-medium transition-colors hover:text-primary">
				Home
			</Link>
			<Link
				href="/examples/e-commerce"
				className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
				Gadgets
			</Link>
			<Link
				href="/examples/e-commerce"
				className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
				Category
			</Link>
			<Link
				href="/examples/e-commerce"
				className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
				Shop
			</Link>
		</nav>
	);
};

export { MainNav };
