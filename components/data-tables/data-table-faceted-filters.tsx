"use client";

import { Column } from "@tanstack/react-table";
import { CheckIcon, FilterIcon, type LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type Option = {
	label: string;
	value: string;
	icon?: LucideIcon;
};

type DataTableFacetedFilterProps<TData, TValue> = {
	column?: Column<TData, TValue>;
	label?: string;
	options: Option[];
};

const DataTableFacetedFilter = <TData, TValue>({ column, label, options }: DataTableFacetedFilterProps<TData, TValue>) => {
	const facets = column?.getFacetedUniqueValues();
	const selectedValues = new Set(column?.getFilterValue() as string[]);

	// HANDLE SELECT
	const handleSelect = (isSelected: boolean, option: Option) => {
		if (isSelected) {
			selectedValues.delete(option.value);
		} else {
			selectedValues.add(option.value);
		}
		const filterValues = Array.from(selectedValues);
		column?.setFilterValue(filterValues.length ? filterValues : undefined);
	};

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					className="border-dashed whitespace-nowrap justify-start w-full sm:w-auto">
					<FilterIcon className="mr-2 h-4 w-4" />
					{label}
					{selectedValues?.size > 0 && (
						<>
							<Separator
								orientation="vertical"
								className="mx-2 h-4"
							/>
							<Badge
								variant="secondary"
								className="rounded-sm px-1 font-normal lg:hidden">
								{selectedValues.size}
							</Badge>
							<div className="hidden space-x-1 lg:flex">
								{selectedValues.size > 2 ? (
									<Badge
										variant="secondary"
										className="rounded-sm px-1 font-normal">
										{selectedValues.size} Selected
									</Badge>
								) : (
									options
										.filter((option) => selectedValues.has(option.value))
										.map((option) => (
											<Badge
												variant="secondary"
												key={option.value}
												className="rounded-sm px-1 font-normal">
												{option.label}
											</Badge>
										))
								)}
							</div>
						</>
					)}
				</Button>
			</PopoverTrigger>
			<PopoverContent
				className="min-w-max p-0"
				align="start">
				<Command>
					<CommandInput placeholder={label} />
					<CommandList>
						<CommandEmpty>No results found</CommandEmpty>
						<CommandGroup>
							{options.map((option) => {
								const isSelected = selectedValues.has(option.value);
								return (
									<CommandItem
										key={option.value}
										onSelect={() => handleSelect(isSelected, option)}>
										{/* CHECKBOX */}
										<div className={cn("mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary", isSelected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible")}>
											<CheckIcon className={cn("h-4 w-4")} />
										</div>
										{/* CONTENT */}
										{option.icon && <option.icon className="mr-2 h-4 w-4 text-muted-foreground" />}
										<span>{option.label}</span>
										{/* COUNT OF OPTION VALUE */}
										<span className="flex items-center justify-center h-4 w-4 ml-auto font-mono text-xs">{facets?.get(option.value) ? facets.get(option.value) : 0}</span>
									</CommandItem>
								);
							})}
						</CommandGroup>
					</CommandList>
					{selectedValues.size > 0 && (
						<>
							<CommandSeparator />
							<CommandGroup>
								<CommandItem
									onSelect={() => column?.setFilterValue(undefined)}
									className="justify-center text-center">
									Clear filters
								</CommandItem>
							</CommandGroup>
						</>
					)}
				</Command>
			</PopoverContent>
		</Popover>
	);
};

export { DataTableFacetedFilter };
