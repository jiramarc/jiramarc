import { Column } from "@tanstack/react-table";
import { ArrowDownAZIcon, ArrowDownAzIcon, ArrowDownUpIcon, ArrowDownZAIcon, EyeOffIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

type DataTableColumnHeaderProps<TData, TValue> = React.HTMLAttributes<HTMLDivElement> & {
	column: Column<TData, TValue>;
	title: string;
};

function DataTableColumnHeader<TData, TValue>({ column, title, className, ...props }: DataTableColumnHeaderProps<TData, TValue>) {
	const menus = [
		{
			label: "Ascending",
			icon: ArrowDownAZIcon,
			disable: column.getIsSorted() === "asc",
			handleClick: () => column.toggleSorting(false),
		},
		{
			label: "Descending",
			icon: ArrowDownAZIcon,
			disable: column.getIsSorted() === "desc",
			handleClick: () => column.toggleSorting(false),
		},
		{
			label: "Hide this column",
			icon: EyeOffIcon,
			disable: !column.getCanHide(),
			handleClick: () => column.toggleVisibility(false),
		},
	];

	if (!column.getCanSort()) {
		return <div className={cn("", className)}>{title}</div>;
	}

	return (
		<div className={cn("flex items-center space-x-2", className)}>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant="ghost"
						size="sm"
						className="-ml-3 h-8 data-[state=open]:bg-accent whitespace-nowrap">
						<span>{title}</span>
						{column.getIsSorted() === "desc" ? <ArrowDownZAIcon className="ml-2 h-4 w-4" /> : column.getIsSorted() === "asc" ? <ArrowDownAzIcon className="ml-2 h-4 w-4" /> : <ArrowDownUpIcon className="ml-2 h-4 w-4" />}
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="start">
					{menus.map((menu, menuIndex) => (
						<DropdownMenuItem
							key={menuIndex}
							disabled={menu.disable}
							onClick={menu.handleClick}>
							<menu.icon className="mr-2 h-4 w-4 text-muted-foreground/70" />
							{menu.label}
						</DropdownMenuItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}

export { DataTableColumnHeader };
