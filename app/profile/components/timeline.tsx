"use client";

import { SearchIcon } from "lucide-react";
import React from "react";

import { TimelineDisplay } from "@/app/profile/components/timeline-display";
import { TimelineList } from "@/app/profile/components/timeline-list";
import { timelines } from "@/app/profile/data";
import { useTimeline } from "@/app/profile/use-timeline";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type TimelineProps = {
	defaultValue?: "all" | "experience" | "education";
};

const Timeline = ({ defaultValue = "all" }: TimelineProps) => {
	const timeline = useTimeline();
	const [search, setSearch] = React.useState("");
	const filterdTimelines = timelines.filter((item) => item.title.trim().toLowerCase().includes(search.trim().toLowerCase()));

	return (
		<div className="flex flex-col lg:flex-row rounded-lg border bg-background shadow-lg">
			{/* PROFILE :: LIST */}
			<Tabs
				defaultValue={defaultValue}
				className="md:border-r">
				<div className="flex items-center gap-6 px-4 py-2">
					<h1 className="text-xl font-bold">Timeline</h1>
					<TabsList className="ml-auto">
						{/* TAB :: ALL */}
						<TabsTrigger
							value="all"
							className="text-zinc-600 dark:Text-zinc-200">
							All
						</TabsTrigger>
						{/* TAB :: EXPERIENCE */}
						<TabsTrigger
							value="experience"
							className="text-zinc-600 dark:Text-zinc-200">
							Experience
						</TabsTrigger>
						{/* TAB :: EDUCATION */}
						<TabsTrigger
							value="education"
							className="text-zinc-600 dark:Text-zinc-200">
							Education
						</TabsTrigger>
					</TabsList>
				</div>
				<Separator />
				<div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
					<form>
						<div className="relative">
							<SearchIcon className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
							<Input
								placeholder="Search job title (e.g. engineer)"
								className="pl-8"
								value={search}
								onChange={(event) => setSearch(event.target.value)}
							/>
						</div>
					</form>
				</div>
				<TabsContent
					value="all"
					className="m-0">
					<TimelineList items={filterdTimelines} />
				</TabsContent>
				<TabsContent
					value="experience"
					className="m-0">
					<TimelineList items={filterdTimelines.filter((item) => item.type === "experience")} />
				</TabsContent>
				<TabsContent
					value="education"
					className="m-0">
					<TimelineList items={filterdTimelines.filter((item) => item.type === "education")} />
				</TabsContent>
			</Tabs>

			{/* PROFILE :: DETAIL */}
			<div className="flex-1">
				<TimelineDisplay item={timelines.find((item) => item.id === timeline.selectedId) || null} />
			</div>
		</div>
	);
};

export { Timeline };
