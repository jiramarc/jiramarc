"use client";

import { MenuIcon, User2Icon } from "lucide-react";
import React from "react";

import { MobileNavigationItem } from "@/components/navigations/mobile-navigation-item";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { siteConfig } from "@/config/site-config";

type MobileTopNavigationBarProps = {};

const MobileTopNavigationBar = (props: MobileTopNavigationBarProps) => {
	const [mobileDrawerIsOpen, setMobileDrawerIsOpen] = React.useState<boolean>(false);

	return (
		<Sheet
			open={mobileDrawerIsOpen}
			onOpenChange={setMobileDrawerIsOpen}>
			<SheetTrigger asChild>
				<Button
					className="mr-2 px-0 text-base md:hidden"
					variant="ghost"
					size="icon">
					<MenuIcon className="h-5 w-5" />
					<span className="sr-only">Toggle Menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent
				side="left"
				className="pr-0">
				{/* LOGO | BRANDING */}
				<MobileNavigationItem
					href="/"
					className="flex items-center">
					<User2Icon className="mr-2 h-4 w-4" />
					<span className="font-bold">{siteConfig.name}</span>
				</MobileNavigationItem>

				{/* MOBILE NAVIGATION */}
				<ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
					{/* MOBILE NAVIGATION :: FROM TOP */}
					<div className="flex flex-col space-y-3">
						{siteConfig.navigations.top.map((link, index) => (
							<MobileNavigationItem
								key={index}
								href={link.href}
								onOpenChange={setMobileDrawerIsOpen}>
								{link.title}
							</MobileNavigationItem>
						))}
					</div>

					{/* MOBILE NAVIGATION :: FROM LEFT */}
					<div className="flex flex-col space-y-2">
						{siteConfig.navigations.left.map((item, index) => (
							<div
								key={index}
								className="flex flex-col space-y-3 pt-6">
								<h4 className="font-medium">{item.title}</h4>
								{item?.items?.length &&
									item.items.map((subItem, subItemIndex) => (
										<React.Fragment key={subItemIndex}>
											<MobileNavigationItem
												href={subItem.href}
												onOpenChange={setMobileDrawerIsOpen}
												className="text-muted-foreground">
												{subItem.title}
											</MobileNavigationItem>
										</React.Fragment>
									))}
							</div>
						))}
					</div>
				</ScrollArea>
			</SheetContent>
		</Sheet>
	);
};

export { MobileTopNavigationBar };
