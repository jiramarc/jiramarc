import { ArrowRightIcon } from "lucide-react";
import Link, { type LinkProps } from "next/link";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type AnnouncementProps = React.HTMLAttributes<HTMLAnchorElement> &
	LinkProps & {
		announcement: string;
		announcementMobile: string;
	};

const Announcement = ({ announcement, announcementMobile, href = "/", className, children, ...props }: AnnouncementProps) => {
	return (
		<Link
			href={href}
			className={cn("inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm fony-medium")}>
			🎉{" "}
			<Separator
				className="mx-2 h-4"
				orientation="vertical"
			/>{" "}
			<span className="sm:hidden">{announcementMobile}</span>
			<span className="hidden sm:inline">{announcement}</span>
			<ArrowRightIcon className="ml-2 h-4 w-4" />
		</Link>
	);
};

export { Announcement };
