"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowDownIcon, ArrowRightIcon, ArrowUpIcon, CircleIcon, HelpCircleIcon, TimerIcon, XCircleIcon } from "lucide-react";

import { DataTableColumnHeader } from "@/components/data-tables/data-table-column-header";
import { Typography } from "@/components/typographies/typography";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

import { ProjectDataTableRowActions } from "./project-data-table-row-actions";
import { ProjectQuerySchema } from "./project-schema";

const statuses = [
	{
		label: "Backlog",
		value: "backlog",
		icon: HelpCircleIcon,
	},
	{
		label: "To do",
		value: "todo",
		icon: CircleIcon,
	},
	{
		label: "In progress",
		value: "in progress",
		icon: TimerIcon,
	},
	{
		label: "Canceled",
		value: "canceled",
		icon: XCircleIcon,
	},
];

const priorities = [
	{
		label: "Low",
		value: "low",
		icon: ArrowDownIcon,
	},
	{
		label: "Medium",
		value: "medium",
		icon: ArrowRightIcon,
	},
	{
		label: "High",
		value: "high",
		icon: ArrowUpIcon,
	},
];

const ProjectDataTableColumns: ColumnDef<ProjectQuerySchema>[] = [
	// COLUMN :: CHECKBOX
	{
		id: "select",
		header: ({ table }) => (
			<Checkbox
				checked={table.getIsAllPageRowsSelected()}
				onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
				aria-label="Select all"
				className="mb-2"
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label="Select row"
				className="mb-2"
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},
	// COLUMN :: ID
	{
		accessorKey: "id",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="Task"
			/>
		),
		cell: ({ row }) => <div className="w-auto whitespace-nowrap">{row.getValue("id")}</div>,
		enableSorting: false,
		enableHiding: false,
	},
	// COLUMN :: TITLE
	{
		accessorKey: "title",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="Project"
			/>
		),
		cell: ({ row }) => (
			<div className="flex flex-row space-x-2">
				<Badge variant="outline">{row.original.label.charAt(0).toLocaleUpperCase() + row.original.label.slice(1)}</Badge>
				<Typography
					className="max-w-[500px] line-clamp-2 truncate"
					component="p"
					variant="body2">
					{row.original.title}
				</Typography>
			</div>
		),
		enableSorting: true,
		enableHiding: false,
	},
	// COLUMN :: STATUS
	{
		accessorKey: "status",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="Status"
			/>
		),
		cell: ({ row }) => {
			const status = statuses.find((status) => status.value === row.getValue("status"));
			if (!status) return null;
			return (
				<div className="flex w-auto items-center whitespace-nowrap">
					{status.icon && <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />}
					<span>{status.label}</span>
				</div>
			);
		},
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
		enableSorting: true,
		enableHiding: true,
	},
	// COLUMN :: PRIORITY
	{
		accessorKey: "priority",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="Priority"
			/>
		),
		cell: ({ row }) => {
			const priority = priorities.find((priority) => priority.value === row.getValue("priority"));
			if (!priority) return null;

			return (
				<div className="flex w-auto items-center whitespace-nowrap">
					{priority.icon && <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />}
					<span>{priority.label}</span>
				</div>
			);
		},
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
		enableSorting: true,
		enableHiding: true,
	},
	// COLUMN :: ACTIONS
	{
		id: "actions",
		cell: ({ row }) => <ProjectDataTableRowActions row={row} />,
	},
];

export { ProjectDataTableColumns, priorities, statuses };
