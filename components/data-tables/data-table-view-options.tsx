"use client";

import { Table } from "@tanstack/react-table";
import { Settings2Icon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

type DataTableViewOptionsProps<TData> = {
	table: Table<TData>;
};

function DataTableViewOptions<TData>({ table }: DataTableViewOptionsProps<TData>) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="outline"
					size="sm"
					className="flex ml-auto h-9 w-full md:w-auto">
					<Settings2Icon className="mr-2 w-4 h-4" />
					View columns
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align="end"
				className="min-w-max">
				<DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
				<DropdownMenuSeparator />
				{table.getAllColumns().filter((column) => typeof column.accessorFn !== "undefined" && column.getCanHide()).length > 0 ? (
					table
						.getAllColumns()
						.filter((column) => typeof column.accessorFn !== "undefined" && column.getCanHide())
						.map((column) => {
							return (
								<DropdownMenuCheckboxItem
									key={column.id}
									className="capitalize"
									checked={column.getIsVisible()}
									onCheckedChange={(value) => column.toggleVisibility(!!value)}>
									{column.id}
								</DropdownMenuCheckboxItem>
							);
						})
				) : (
					<DropdownMenuItem disabled>No columns to hide</DropdownMenuItem>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export { DataTableViewOptions };
