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
	// {
	// 	name: "Dashboard",
	// 	href: "/examples/dashboard",
	// },
	{
		name: "Cards",
		href: "/examples/cards",
	},
	// {
	// 	name: "Tasks",
	// 	href: "/examples/tasks",
	// },

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
			<ScrollArea className="max-w-xl lg:max-w-none">
				<div
					className={cn("flex items-center mb-4", className)}
					{...props}>
					{examples.map((example, index) => (
						<Link
							key={example.href}
							href={example.href}
							className={cn(
								//
								"flex items-center justify-center text-center text-sm transition-colors hover:text-primary rounded-full px-4 h-7",
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
