import { Table } from "@tanstack/react-table";

import { DataTableViewOptions } from "@/components/data-tables/data-table-view-options";
import { Input } from "@/components/ui/input";

type DataTableToolbarProps<TData> = React.HTMLAttributes<HTMLDivElement> & {
	table: Table<TData>;
	defaultFilterValue: string;
	defaultFilterPlaceholder: string;
};

function DataTableToolbar<TData>({ table, defaultFilterValue, defaultFilterPlaceholder, children }: DataTableToolbarProps<TData>) {
	return (
		<div className="flex flex-col md:flex-row justify-between gap-2">
			<div className="flex flex-1 flex-col sm:flex-row items-center gap-2 md:space-y-0">
				{/* DATA TABLE TOOLBAR :: INPUT :: FILTER DOCUMENT TYPE NAME */}
				<Input
					placeholder={defaultFilterPlaceholder}
					value={(table.getColumn(defaultFilterValue)?.getFilterValue() as string) ?? ""}
					onChange={(event) => table.getColumn(defaultFilterValue)?.setFilterValue(event.target.value)}
					className="w-full sm:w-auto"
				/>

				{/* CHILDREN */}
				{children}
			</div>

			<DataTableViewOptions table={table} />
		</div>
	);
}

export { DataTableToolbar };
