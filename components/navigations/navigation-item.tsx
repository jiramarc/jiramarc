"use client";

import { type LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type TNavigationItem = {
	title: string;
	label?: string;
	href: string;
	icon: LucideIcon;
};

type NavigationItemProps = {
	isCollapsed: boolean | undefined;
	link: TNavigationItem;
};

const NavigationItem = ({ isCollapsed, link }: NavigationItemProps) => {
	const pathname = usePathname();
	const isActive = pathname === link.href;

	if (isCollapsed) {
		return (
			<Tooltip delayDuration={0}>
				<TooltipTrigger asChild>
					<Link
						href={link.href}
						className={cn("h-9 w-9", buttonVariants({ variant: isActive ? "default" : "ghost", size: "icon" }), isActive && "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white")}>
						<link.icon className="h-4 w-4" />
						<span className="sr-only">{link.title}</span>
					</Link>
				</TooltipTrigger>
				<TooltipContent
					side="right"
					className="flex items-center gap-4">
					{link.title}
					{link.label && <span className="ml-auto text-muted-foreground">{link.label}</span>}
				</TooltipContent>
			</Tooltip>
		);
	} else {
		return (
			<Link
				href={link.href}
				className={cn(buttonVariants({ variant: isActive ? "default" : "ghost", size: "sm" }), isActive && "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white", "justify-start")}>
				<link.icon className="mr-2 h-4 w-4" />
				{link.title}
				{link.label && <span className={cn("ml-auto", isActive && "text-background dark:text-white")}>{link.label}</span>}
			</Link>
		);
	}
};

export { NavigationItem, type TNavigationItem };
