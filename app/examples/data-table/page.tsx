import { Metadata } from "next";

import { ProjectDataTable } from "@/components/data-tables/projects/project-data-table";
import { ProjectDataTableColumns } from "@/components/data-tables/projects/project-data-table-columns";

export const metadata: Metadata = {
	title: "Data Table",
	description: "Example of data table built using the components.",
};

const projects = [
	{
		id: "TASK-8782",
		title: "You can't compress the program without quantifying the open-source SSD pixel!",
		status: "in progress",
		label: "documentation",
		priority: "medium",
	},
	{
		id: "TASK-7878",
		title: "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",
		status: "backlog",
		label: "documentation",
		priority: "medium",
	},
	{
		id: "TASK-7839",
		title: "We need to bypass the neural TCP card!",
		status: "todo",
		label: "bug",
		priority: "high",
	},
	{
		id: "TASK-5562",
		title: "The SAS interface is down, bypass the open-source pixel so we can back up the PNG bandwidth!",
		status: "backlog",
		label: "feature",
		priority: "medium",
	},
];

type ExampleDataTablePageProps = {};

const ExampleDataTablePage = ({}: ExampleDataTablePageProps) => {
	return (
		<section className="border rounded-lg">
			<div className="p-4">
				<ProjectDataTable
					data={projects}
					columns={ProjectDataTableColumns}
				/>
			</div>
		</section>
	);
};

export default ExampleDataTablePage;
