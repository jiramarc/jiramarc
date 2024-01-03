import { Metadata } from "next";
import Link from "next/link";
import React from "react";

import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/headings/page-header";
import { ExamplesNavigation } from "@/components/navigations/examples-navigation";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site-config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
	title: {
		default: "Examples",
		template: `%s - Examples - ${siteConfig.name}`,
	},
	description: "Check out some examples app built using the components.",
};

type ExamplesLayoutProps = {
	children: React.ReactNode;
};

const ExamplesLayout = ({ children }: ExamplesLayoutProps) => {
	return (
		<section className="relative container">
			{/* SECTION :: PAGE HEADER */}
			<PageHeader>
				<PageHeaderHeading>Checkout some exaples</PageHeaderHeading>
				<PageHeaderDescription>Dashboard, Cards, Authentication. Some examples built using the components. Use this as a guide to build your own.</PageHeaderDescription>
				<PageActions>
					<Link
						href="/examples/cards"
						target="_blank"
						rel="noopener noreferrer"
						className={cn("", buttonVariants())}>
						Get Started
					</Link>
					<Link
						href="/components"
						target="_blank"
						rel="noopener noreferrer"
						className={cn("", buttonVariants({ variant: "outline" }))}>
						Components
					</Link>
				</PageActions>
			</PageHeader>

			{/* SECTION :: EXAMPLES NAVIGATION */}
			<ExamplesNavigation />

			{/* SECTION :: EXAMPLES */}
			<div className="overflow-hidden pb-8">{children}</div>
		</section>
	);
};

export default ExamplesLayout;
