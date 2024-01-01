"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site-config";
import { cn } from "@/lib/utils";

type NonMobileTopNavigationBarProps = {};

const NonMobileTopNavigationBar = ({}: NonMobileTopNavigationBarProps) => {
	const pathname = usePathname();

	return (
		<div className="hidden md:flex">
			{/* LOGO & BRANDING */}
			<Link
				href="/"
				className="flex items-center space-x-2 mr-6">
				<svg
					id="logo-35"
					width="24"
					height="24"
					viewBox="0 0 50 39"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					{" "}
					<path
						d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
						className="ccompli1"
						fill="#007AFF"></path>{" "}
					<path
						d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
						className="ccustom"
						fill="#312ECB"></path>{" "}
				</svg>
				<span className="hidden font-bold sm:inline-block">{siteConfig.name}</span>
			</Link>

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
