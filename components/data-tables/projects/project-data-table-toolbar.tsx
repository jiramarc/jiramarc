import { Table } from "@tanstack/react-table";
import { RotateCcwIcon } from "lucide-react";

import { DataTableFacetedFilter } from "@/components/data-tables/data-table-faceted-filters";
import { DataTableToolbar } from "@/components/data-tables/data-table-toolbar";
import { Button } from "@/components/ui/button";
import { priorities, statuses } from "./project-data-table-columns";

type ProjectDataTableToolbarProps<TData> = {
	table: Table<TData>;
};

function ProjectDataTableToolbar<TData>({ table }: ProjectDataTableToolbarProps<TData>) {
	const isFiltered = table.getState().columnFilters.length > 0;

	return (
		<DataTableToolbar
			table={table}
			defaultFilterValue="title"
			defaultFilterPlaceholder="Filter title...">
			{/* DATA TABLE TOOLBAR :: FILTER STATUS */}
			{table.getColumn("status") && (
				<DataTableFacetedFilter
					column={table.getColumn("status")}
					label="Status"
					options={statuses}
				/>
			)}

			{/* DATA TABLE TOOLBAR :: FILTER PRIORITY */}
			{table.getColumn("priority") && (
				<DataTableFacetedFilter
					column={table.getColumn("priority")}
					label="Priority"
					options={priorities}
				/>
			)}

			{/* DATA TABLE TOOLBAR :: RESET FILTER */}
			{isFiltered && (
				<Button
					className="w-full sm:w-auto px-2 lg:px-3"
					variant="destructive"
					onClick={() => table.resetColumnFilters()}>
					<RotateCcwIcon className="mr-2 h-4 w-4" />
					Reset
				</Button>
			)}
		</DataTableToolbar>
	);
}

export { ProjectDataTableToolbar };
