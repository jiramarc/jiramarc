import { NavigationItem, TNavigationItem } from "@/components/navigations/navigation-item";

type NavigationListProps = {
	isCollapsed: boolean | undefined;
	links: TNavigationItem[];
};

const NavigationList = ({ isCollapsed, links }: NavigationListProps) => {
	return (
		<div
			data-collapsed={isCollapsed}
			className="group flex flex-col gap-4 py-2 data-[collapsed=true]:pt-2]">
			<nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
				{links.map((link, index) => (
					<NavigationItem
						key={index}
						isCollapsed={isCollapsed}
						link={link}
					/>
				))}
			</nav>
		</div>
	);
};

export { NavigationList };
