import Balance from "react-wrap-balancer";

import { cn } from "@/lib/utils";

const PageHeader = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
	return (
		<section
			className={cn("flex flex-col items-center mx-auto max-w-5xl gap-2 py-8 md:pb-8 lg:py-24 lg:pb-20", className)}
			{...props}>
			{children}
		</section>
	);
};

const PageHeaderHeading = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
	return (
		<h1
			className={cn("text-3xl md:text-6xl font-bold text-center leading-tight lg:leading-[1.1] tracking-tighter", className)}
			{...props}
		/>
	);
};

const PageHeaderDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
	return (
		<Balance
			className={cn("text-lg sm:text-xl text-center max-w-[750px] text-muted-foreground", className)}
			{...props}
		/>
	);
};

const PageActions = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
	return (
		<div
			className={cn("flex items-center justify-center w-full space-x-4 py-4 md:pb-10", className)}
			{...props}>
			{children}
		</div>
	);
};

export { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading };
