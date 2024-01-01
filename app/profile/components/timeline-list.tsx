"use client";

import { format } from "date-fns";
import React from "react";

import { Timeline } from "@/app/profile/data";
import { useTimeline } from "@/app/profile/use-timeline";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

type TimelineListProps = {
	items: Timeline[];
};

const TimelineList = ({ items }: TimelineListProps) => {
	const timeline = useTimeline();
	return (
		<ScrollArea className="h-96 lg:h-[640px]">
			<div className="flex flex-col gap-2 p-4 pt-0">
				{items.map((item, index) => (
					<button
						key={index}
						className={cn(
							//
							"flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent w-full lg:w-96",
							timeline.selectedId === item.id && "bg-accent"
						)}
						onClick={() => timeline.handleSelectTimeline(item.id)}>
						<div className="flex flex-col w-full gap-2">
							{/* TIMELINE :: HEADING */}
							<div className="flex-items-center">
								<div className="flex items-center gap-2">
									<div className="font-semibold">{item.title}</div>
									{item.isCurrent && <span className="flex h-2 w-2 rounded-full bg-amber-500" />}
									<div className={cn("ml-auto whitespace-nowrap text-xs", timeline.selectedId === item.id ? "text-foreground" : "text-muted-foreground")}>
										{format(new Date(item.started_at), "MMM yyyy")} - {item.isCurrent ? "Present" : format(new Date(item.ended_at), "MMM yyyy")}
									</div>
								</div>
								<div className="text-xs text-foreground">{item.organization}</div>
							</div>

							{/* TIMELINE :: DESCRIPTION */}
							<div className="text-xs text-muted-foreground line-clamp-2">{item.description.substring(0, 300)}</div>

							{/* TIMELINE :: SKILLS */}
							{item.skills.length ? (
								<div className="flex items-center gap-2">
									{item.skills.map((skill, index) => (
										<Badge
											key={index}
											variant={getBadgeVariantFromLabel(skill)}>
											{skill}
										</Badge>
									))}
								</div>
							) : null}
						</div>
					</button>
				))}
			</div>
		</ScrollArea>
	);
};

const getBadgeVariantFromLabel = (label: string): React.ComponentProps<typeof Badge>["variant"] => {
	if (["full-stack development"].includes(label.toLowerCase())) {
		return "default";
	}

	if (["project management"].includes(label.toLowerCase())) {
		return "outline";
	}

	return "secondary";
};

export { TimelineList };
