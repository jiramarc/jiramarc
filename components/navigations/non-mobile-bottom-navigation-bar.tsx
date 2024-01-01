import Link from "next/link";

import { siteConfig } from "@/config/site-config";

type NonMobileBottomNavigationBarProps = {};

const NonMobileBottomNavigationBar = ({}: NonMobileBottomNavigationBarProps) => {
	return (
		<footer className="hidden md:flex max-w-screen-2xl container">
			<div className="flex flex-row items-center gap-4">
				<p className="text-balance text-sm leading-loose text-muted-foreground">
					Built by{" "}
					<Link
						className="text-medium underline underline-offset-4 hover:text-accent-foreground transition-colors"
						href={siteConfig.socials[0].href}
						target="_blank">
						Jiramarc
					</Link>
				</p>
			</div>
		</footer>
	);
};

export { NonMobileBottomNavigationBar };
