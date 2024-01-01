"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site-config";
import { cn } from "@/lib/utils";

type MobileBottomNavigationBarProps = {};

const MobileBottomNavigationBar = ({}: MobileBottomNavigationBarProps) => {
	const pathname = usePathname();
	const isRelatedPath = (path: string) => {
		if (path === "/" && pathname !== path) {
			return false;
		} else {
			return pathname?.startsWith(path);
		}
	};

	return (
		<footer className="flex md:hidden items-center justify-between w-full">
			{siteConfig.navigations.bottom.map((link, index) => (
				<Link
					key={index}
					href={link.href}
					className={cn(
						//
						"flex flex-col items-center rounded-md w-16 p-2 hover:bg-accent transition-colors",
						isRelatedPath(link.href) ? "bg-accent text-accent-foreground" : ""
					)}>
					<link.icon className="h-6 w-6" />
					<span className="text-xs text-muted-foreground">{link.title}</span>
					<span className="sr-only">{link.title}</span>
				</Link>
			))}
		</footer>
	);
};

export { MobileBottomNavigationBar };
