"use client";

import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

type MobileNavigationItemProps = React.HTMLAttributes<HTMLAnchorElement> &
	LinkProps & {
		onOpenChange?: (open: boolean) => void;
	};

const MobileNavigationItem = ({ href, onOpenChange, className, children, ...props }: MobileNavigationItemProps) => {
	const router = useRouter();

	return (
		<Link
			href={href}
			onClick={() => {
				router.push(href.toString());
				onOpenChange?.(false);
			}}
			className={cn("", className)}
			{...props}>
			{children}
		</Link>
	);
};

export { MobileNavigationItem };
