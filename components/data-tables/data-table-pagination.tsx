import { Table } from "@tanstack/react-table";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type DataTablePaginationProps<TData> = {
	table: Table<TData>;
};

function DataTablePagination<TData>({ table }: DataTablePaginationProps<TData>) {
	return (
		<div className="flex flex-row items-center justify-end">
			{/* LEFT */}
			<div className="hidden sm:flex flex-1 w-full text-sm text-muted-foreground">
				{/* TEXT: n of max row(s) selected */}
				{table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s) selected
			</div>

			{/* RIGHT */}
			<div className="flex items-center justify-between sm:justify-end w-full sm:w-auto space-x-6 lg:space-x-8">
				{/* SELECT :: ROWS PER PAGE */}
				<div className="flex items-center space-x-2">
					<p className="text-sm font-medium">Rows per page</p>
					{/* SELECT PAGE SIZE */}
					<Select
						value={`${table.getState().pagination.pageSize}`}
						onValueChange={(value: string) => table.setPageSize(Number(value))}>
						<SelectTrigger className="h-8 w-[70px]">
							<SelectValue placeholder={table.getState().pagination.pageSize} />
						</SelectTrigger>
						<SelectContent
							align="center"
							side="top">
							{[5, 10, 20, 30, 40, 50].map((pageSize) => (
								<SelectItem
									key={pageSize}
									value={`${pageSize}`}>
									{pageSize}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
				{/* TEXT :: PAGE n of TOTAL PAGE */}
				<div className="flex min-w-fit px-2 sm:px-4 items-center justify-center text-sm font-medium">
					Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
				</div>
				{/* BUTTON :: PAGINATION */}
				<div className="flex items-center space-x-2">
					{/* BUTTON :: PAGINATION :: FIRST PAGE */}
					<Button
						variant="outline"
						className="hidden lg:flex h-8 w-8 p-0"
						onClick={() => table.setPageIndex(0)}
						disabled={!table.getCanPreviousPage()}>
						<span className="sr-only">Go to first page</span>
						<ChevronsLeft className="w-4 h-4" />
					</Button>
					{/* BUTTON :: PAGINATION :: PREVIOUS PAGE */}
					<Button
						variant="outline"
						className="h-8 w-8 p-0"
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}>
						<span className="sr-only">Go to previous page</span>
						<ChevronLeft className="w-4 h-4" />
					</Button>
					{/* BUTTON :: PAGINATION :: NEXT PAGE */}
					<Button
						variant="outline"
						className="h-8 w-8 p-0"
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}>
						<span className="sr-only">Go to next page</span>
						<ChevronRight className="w-4 h-4" />
					</Button>
					{/* BUTTON :: PAGINATION :: LAST PAGE */}
					<Button
						variant="outline"
						className="hidden lg:flex h-8 w-8 p-0"
						onClick={() => table.setPageIndex(table.getPageCount() - 1)}
						disabled={!table.getCanNextPage()}>
						<span className="sr-only">Go to last page</span>
						<ChevronsRight className="w-4 h-4" />
					</Button>
				</div>
			</div>
		</div>
	);
}

export { DataTablePagination };
