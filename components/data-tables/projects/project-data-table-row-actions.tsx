"use client";

import { Row } from "@tanstack/react-table";
import { CopyIcon, FileEditIcon, StarIcon, Trash2Icon } from "lucide-react";
import { toast } from "sonner";

import { DataTableRowActions } from "@/components/data-tables/data-table-row-actions";
import { projectQuerySchema } from "./project-schema";

type ProjectDataTableRowActionsProps<TData> = {
	row: Row<TData>;
};

function ProjectDataTableRowActions<TData>({ row }: ProjectDataTableRowActionsProps<TData>) {
	// PARSE ROW ORIGINAL
	const userRowOriginal = projectQuerySchema.parse(row.original);

	// ACTIONS :: ON COPY
	const onCopy = () => {
		window.navigator.clipboard.writeText(userRowOriginal.id);
		toast.info("Copied", {
			description: "Copied to clipboard",
		});
	};

	// DEFINE :: ROW ACTIONS
	const actions = [
		{
			group: "Actions",
			items: [
				{
					label: "Copy id",
					icon: CopyIcon,
					onSelect: onCopy,
				},
				{
					label: "Edit",
					icon: FileEditIcon,
					onSelect: () => {},
				},
				{
					label: "Starred",
					icon: StarIcon,
					onSelect: () => {},
				},
				{
					label: "Delete",
					icon: Trash2Icon,
					onSelect: () => {},
				},
			],
		},
	];

	return <DataTableRowActions actions={actions} />;
}

export { ProjectDataTableRowActions };
