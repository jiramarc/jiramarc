import Link from "next/link";

import { MainCommandMenu } from "@/components/command-menus/main-command-menu";
import { MobileTopNavigationBar } from "@/components/navigations/mobile-top-navigation-bar";
import { NonMobileTopNavigationBar } from "@/components/navigations/non-mobile-top-navigation-bar";
import { ThemeSwitcher } from "@/components/switchers/theme-switcher";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site-config";
import { cn } from "@/lib/utils";

type SiteHeaderProps = React.HTMLAttributes<HTMLHeadElement> & {};

const SiteHeader = ({ className, children, ...props }: SiteHeaderProps) => {
	return (
		<header
			className={cn("sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-folter]:bg-background/60", className)}
			{...props}>
			<div className="flex items-center h-14 max-w-screen-2xl container">
				<NonMobileTopNavigationBar />
				<MobileTopNavigationBar />
				<div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
					<div className="flex-1 w-full md:w-auto md:flex-none">
						<MainCommandMenu />
					</div>
					<div className="flex items-center">
						{/* SOCIAL LINKS */}
						{siteConfig.socials.map((link, index) => (
							<Link
								key={index}
								href={link.href}
								target="_blank"
								rel="noreferer"
								className={cn("", buttonVariants({ variant: "ghost", size: "icon" }))}>
								<link.icon className="h-4 w-4" />
								<span className="sr-only">{link.title}</span>
							</Link>
						))}

						{/* THEME SWITCHER */}
						<ThemeSwitcher />
					</div>
				</div>
			</div>
		</header>
	);
};

export { SiteHeader };
