"use client";

import { format, formatDistance } from "date-fns";
import Balancer from "react-wrap-balancer";

import { Timeline } from "@/app/profile/data";
import { useTimeline } from "@/app/profile/use-timeline";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

type TimelineDisplayProps = {
	item: Timeline | null;
};

const TimelineDisplay = ({ item }: TimelineDisplayProps) => {
	const timeline = useTimeline();

	return (
		<div className="flex flex-col h-full w-full border-t lg:border-none">
			{item ? (
				<div className="flex flex-col flex-1">
					<div className="flex items-start p-4">
						<div className="flex items-start gap-4 text-sm">
							{/* TIMELINE DISPLAY :: AVATAR */}
							<Avatar>
								<AvatarFallback>JP</AvatarFallback>
							</Avatar>

							{/* TIMELINE DISPLAY :: TITLE | ORGANIZATION */}
							<div className="grid gap-1">
								<div className="font-semibold">{item.title}</div>
								<div className="line-clamp-1 text-xs">{item.organization}</div>
							</div>
						</div>
						<div className="ml-auto text-xs text-muted-foreground">
							{format(new Date(item.started_at), "MMM yyyy")} - {item.isCurrent ? "Present" : format(new Date(item.ended_at), "MMM yyyy")} ({formatDistance(new Date(item.started_at), new Date(item.ended_at))})
						</div>
					</div>

					<Separator className="mt-auto" />

					<div className="flex-1 whitespace-pre-wrap p-4 text-sm space-y-6">
						<Balancer>{item.description}</Balancer>
						<ul>
							{item.responsibilities.map((responsibility, index) => (
								<li
									key={index}
									className="list-disc list-inside">
									{responsibility}
								</li>
							))}
						</ul>
					</div>
				</div>
			) : (
				<div className="p-8 text-center text-muted-foreground">No timeline selected</div>
			)}
		</div>
	);
};

export { TimelineDisplay };
