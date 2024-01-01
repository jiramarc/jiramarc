import { MobileBottomNavigationBar } from "@/components/navigations/mobile-bottom-navigation-bar";
import { NonMobileBottomNavigationBar } from "@/components/navigations/non-mobile-bottom-navigation-bar";
import { cn } from "@/lib/utils";

type SiteFooterProps = React.HTMLAttributes<HTMLDivElement> & {};

const SiteFooter = ({ className, children, ...props }: SiteFooterProps) => {
	return (
		<footer
			className={cn("sticky bottom-0 z-50 w-screen border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-folter]:bg-background/60", className)}
			{...props}>
			<div className="flex items-center h-16 px-4">
				<NonMobileBottomNavigationBar />
				<MobileBottomNavigationBar />
			</div>
		</footer>
	);
};

export { SiteFooter };
