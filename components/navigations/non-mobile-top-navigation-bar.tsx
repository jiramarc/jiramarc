"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Logo } from "@/components/sites/logo";
import { siteConfig } from "@/config/site-config";
import { cn } from "@/lib/utils";

type NonMobileTopNavigationBarProps = {};

const NonMobileTopNavigationBar = ({}: NonMobileTopNavigationBarProps) => {
	const pathname = usePathname();

	return (
		<div className="hidden md:flex">
			{/* LOGO & BRANDING */}
			<Logo href="/" />

			{/* NAVIGATION */}
			<nav className="flex items-center gap-6 text-sm">
				{siteConfig.navigations.top.map((link, index) => (
					<Link
						key={index}
						href={link.href}
						target={link.target || "_self"}
						className={cn(
							//
							"text-foreground/60 transition-colors hover:text-foreground/80",
							pathname?.startsWith(link.href) ? "text-foreground" : "text-foreground/60",
							link.hidden && "hidden lg:block"
						)}>
						{link.title}
					</Link>
				))}
			</nav>
		</div>
	);
};

export { NonMobileTopNavigationBar };
