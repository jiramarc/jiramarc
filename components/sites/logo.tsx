import Link, { type LinkProps } from "next/link";

import { siteConfig } from "@/config/site-config";
import { cn } from "@/lib/utils";

type LogoProps = React.HTMLAttributes<HTMLAnchorElement> &
	LinkProps & {
		name?: string;
	};

const Logo = ({ href, name, className }: LogoProps) => {
	return (
		<Link
			href={href}
			className={cn("flex items-center space-x-2 mr-6", className)}>
			<svg
				id="logo-35"
				width="24"
				height="24"
				viewBox="0 0 50 39"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				{" "}
				<path
					d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
					className="ccompli1"
					fill="#007AFF"></path>{" "}
				<path
					d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
					className="ccustom"
					fill="#312ECB"></path>{" "}
			</svg>
			<span className="hidden font-bold sm:inline-block">{name ? name : siteConfig.name}</span>
		</Link>
	);
};

export { Logo };
