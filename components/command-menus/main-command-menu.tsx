"use client";

import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import React from "react";

import { Button } from "@/components/ui/button";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command";
import { siteConfig } from "@/config/site-config";
import { cn } from "@/lib/utils";

type MainCommandMenuProps = {};

const MainCommandMenu = ({}: MainCommandMenuProps) => {
	const [mainCommandMenuIsOpen, setMainCommandMenuIsOpen] = React.useState<boolean>(false);
	const router = useRouter();
	const { setTheme } = useTheme();

	React.useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setMainCommandMenuIsOpen((mainCommandMenuIsOpen) => !mainCommandMenuIsOpen);
			}
		};

		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, []);

	const runCommand = React.useCallback((command: () => unknown) => {
		setMainCommandMenuIsOpen(false);
		command();
	}, []);

	return (
		<React.Fragment>
			<Button
				className={cn("relative h-8 w-full justify-start rounded-md bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64")}
				variant="outline"
				onClick={() => setMainCommandMenuIsOpen(true)}>
				<span className="hidden lg:inline-flex">Search documentation...</span>
				<span className="inline-flex lg:hidden">Search...</span>
				<kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
					<span className="text-xs">⌘</span>K
				</kbd>
			</Button>
			<CommandDialog
				open={mainCommandMenuIsOpen}
				onOpenChange={setMainCommandMenuIsOpen}>
				<CommandInput placeholder="Type a command or search..." />
				<CommandList>
					<CommandEmpty>No result found.</CommandEmpty>

					{/* COMMAND MENU :: MAIN NAVIGATION */}
					<CommandGroup heading="Main Navigation">
						{siteConfig.navigations.top.map((link) => (
							<CommandItem
								key={link.title}
								value={link.title}
								onSelect={() => runCommand(() => router.push(link.href.toString()))}>
								<link.icon className="mr-2 h-4 w-4" />
								{link.title}
							</CommandItem>
						))}
					</CommandGroup>

					{/* COMMAND MENU :: LEFT NAVIGATION */}
					{siteConfig.navigations.left.map((group) => (
						<CommandGroup
							key={group.title}
							heading={group.title}>
							{group.items.map((link, index) => (
								<CommandItem
									key={index}
									value={link.title}
									onSelect={() => runCommand(() => router.push(link.href.toString()))}>
									<link.icon className="mr-2 h-4 w-4" />
									{link.title}
								</CommandItem>
							))}
						</CommandGroup>
					))}

					{/* COMMAND MENU :: THEME */}
					<CommandGroup heading="Theme">
						{siteConfig.themes.map((theme) => (
							<CommandItem
								key={theme.theme}
								onSelect={() => runCommand(() => setTheme(theme.theme))}>
								<theme.icon className="mr-2 h-4 w-4" />
								{theme.theme.charAt(0).toUpperCase() + theme.theme.slice(1)}
							</CommandItem>
						))}
					</CommandGroup>
				</CommandList>
				<CommandSeparator />
			</CommandDialog>
		</React.Fragment>
	);
};

export { MainCommandMenu };
