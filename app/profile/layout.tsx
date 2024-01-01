import { GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

import { Announcement } from "@/components/announcements/announcement";
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/headings/page-header";
import { ExamplesNavigation } from "@/components/navigations/examples-navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ProfileLayoutProps = {
	children: React.ReactNode;
};

const ProfileLayout = ({ children }: ProfileLayoutProps) => {
	return (
		<section className="relative container">
			{/* SECTION :: PAGE HEADER */}
			<PageHeader>
				<Announcement
					href="/"
					announcement="Open to work"
					announcementMobile="Open to work"
				/>
				<PageHeaderHeading>Jiranop Phinyo</PageHeaderHeading>
				<PageHeaderDescription>Full-Stack Software Engineer based in Bangkok, Thailand</PageHeaderDescription>
				<PageActions>
					<Link
						href="https://www.linkedin.com/in/jiranopphinyo/"
						target="_blank"
						rel="noopener noreferrer"
						className={cn("", buttonVariants())}>
						<LinkedinIcon className="mr-2 h-4 w-4" />
						LinkedIn
					</Link>
					<Link
						href="https://github.com/jiramarc"
						target="_blank"
						rel="noopener noreferrer"
						className={cn("", buttonVariants({ variant: "outline" }))}>
						<GithubIcon className="mr-2 h-4 w-4" />
						Github
					</Link>
				</PageActions>
			</PageHeader>

			{/* SECTION :: EXAMPLES NAVIGATION */}
			<ExamplesNavigation />

			{/* SECTION :: PROFILES */}
			<div className="overflow-hidden pb-8">{children}</div>
		</section>
	);
};

export default ProfileLayout;
