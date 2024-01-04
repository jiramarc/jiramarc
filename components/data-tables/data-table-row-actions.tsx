import { MoreHorizontalIcon, type LucideIcon } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

type ActionItem = {
	label: string;
	icon: LucideIcon;
	onSelect: () => void;
};

type DataTableRowActionsProps = {
	actions: {
		group: string;
		items: ActionItem[];
	}[];
};

const DataTableRowActions = ({ actions }: DataTableRowActionsProps) => {
	const [popoverIsOpen, setPopoverIsOpen] = React.useState<boolean>(false);

	return (
		<Popover
			open={popoverIsOpen}
			onOpenChange={setPopoverIsOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="ghost"
					size="icon"
					aria-expanded={popoverIsOpen}
					aria-label="open menu"
					className="flex h-8 w-8 p-0 data-[state=open]:bg-muted">
					<MoreHorizontalIcon className="w-4 h-4" />
					<span className="sr-only">Open menu</span>
				</Button>
			</PopoverTrigger>
			<PopoverContent
				align="end"
				className="min-w-fit p-0">
				<Command>
					<CommandList>
						{actions.map((action) => (
							<CommandGroup
								key={action.group}
								heading={action.group}>
								{action.items.map((item) => (
									<CommandItem
										key={item.label}
										className="whitespace-nowrap"
										onSelect={() => {
											item.onSelect();
											setPopoverIsOpen(false);
										}}>
										<item.icon className="mr-2 h-4 w-4" />
										{item.label}
									</CommandItem>
								))}
							</CommandGroup>
						))}
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
};

export { DataTableRowActions };
