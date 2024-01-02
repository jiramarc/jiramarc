import { AtSignIcon, BellIcon, BellOffIcon } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type NotificationCardProps = {};

const notifications = [
	{
		title: "Everything",
		description: "Email digest, mentions and all activity.",
		icon: BellIcon,
	},
	{
		title: "Only mentions",
		description: "Just mentions and direct messages.",
		icon: AtSignIcon,
	},
	{
		title: "Ignoring",
		description: "Turn off all notifications.",
		icon: BellOffIcon,
	},
];

const NotificationCard = (props: NotificationCardProps) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Notifications</CardTitle>
				<CardDescription>Choose what you want to be notified about</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-1">
				{notifications.map((notification, index) => (
					<div
						className={cn("flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground cursor-pointer", index === 0 ? "bg-accent text-accent-foreground" : "")}
						key={index}>
						<notification.icon className="mt-px h-5 w-5" />
						<div>
							<p className="text-sm font-medium leading-none">{notification.title}</p>
							<p className="text-sm text-muted-foreground">{notification.description}</p>
						</div>
					</div>
				))}
			</CardContent>
		</Card>
	);
};

export { NotificationCard };
