"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

type ExamplesNavigationProps = React.HTMLAttributes<HTMLDivElement> & {};

const examples = [
	{
		name: "Experience",
		href: "/profile/experience",
	},
	{
		name: "Education",
		href: "/profile/education",
	},
	{
		name: "Dashboard",
		href: "/examples/dashboard",
	},
	{
		name: "Cards",
		href: "/examples/cards",
	},
	{
		name: "Data Table",
		href: "/examples/data-table",
	},
	{
		name: "E-commerce",
		href: "/examples/e-commerce",
	},
	// {
	// 	name: "Forms",
	// 	href: "/examples/forms",
	// },
	// {
	// 	name: "Music",
	// 	href: "/examples/music",
	// },
	// {
	// 	name: "Authentication",
	// 	href: "/examples/authentication",
	// },
];

const ExamplesNavigation = ({ className, ...props }: ExamplesNavigationProps) => {
	const pathname = usePathname();

	return (
		<div className="relative">
			<ScrollArea className="max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-none">
				<div
					className={cn("flex items-center mb-4", className)}
					{...props}>
					{examples.map((example, index) => (
						<Link
							key={example.href}
							href={example.href}
							className={cn(
								//
								"flex items-center justify-center text-center text-sm transition-colors hover:text-primary rounded-full px-4 h-7 whitespace-nowrap",
								pathname?.startsWith(example.href) || (index === 0 && pathname === "/") ? "bg-muted font-medium text-primary" : "text-muted-foreground"
							)}>
							{example.name}
						</Link>
					))}
				</div>
				<ScrollBar
					orientation="horizontal"
					className="invisible"
				/>
			</ScrollArea>
		</div>
	);
};

export { ExamplesNavigation };
