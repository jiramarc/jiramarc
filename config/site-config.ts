import { AppWindowIcon, BookTextIcon, DownloadIcon, GitCommitVerticalIcon, GithubIcon, HomeIcon, LaptopIcon, LinkedinIcon, MoonIcon, PackageIcon, PaletteIcon, SunIcon, TypeIcon, User2Icon } from "lucide-react";

export const siteConfig = {
	name: "Jiramarc",
	socials: [
		{
			title: "LinkedIn",
			href: "https://www.linkedin.com/in/jiranopphinyo/",
			icon: LinkedinIcon,
		},
		{
			title: "Github",
			href: "https://github.com/jiramarc",
			icon: GithubIcon,
		},
	],
	themes: [
		{
			theme: "light",
			icon: SunIcon,
		},
		{
			theme: "dark",
			icon: MoonIcon,
		},
		{
			theme: "system",
			icon: LaptopIcon,
		},
	],
	navigations: {
		top: [
			{ title: "Profile", href: "/profile/experience", icon: User2Icon, hidden: false },
			{ title: "Components", href: "/components", icon: PackageIcon, hidden: false },
			{ title: "Examples", href: "/examples", icon: AppWindowIcon, hidden: false },
			{ title: "Github", href: "https://github.com/jiramarc", icon: GithubIcon, hidden: true, target: "_blank" },
		],
		bottom: [
			{ title: "Profile", href: "/profile/experience", icon: User2Icon },
			{ title: "UI", href: "/components", icon: PackageIcon },
			{ title: "Home", href: "/", icon: HomeIcon },
			{ title: "Examples", href: "/examples", icon: AppWindowIcon },
			{ title: "GitHub", href: "https://github.com/jiramarc", icon: GithubIcon },
		],
		left: [
			{
				title: "Getting Started",
				items: [
					{
						title: "Introduction",
						href: "/",
						icon: BookTextIcon,
						items: [],
					},
					{
						title: "Installation",
						href: "/",
						icon: DownloadIcon,
						items: [],
					},
					{
						title: "Theming",
						href: "/",
						icon: PaletteIcon,
						items: [],
					},
					{
						title: "Dark mode",
						href: "/",
						icon: MoonIcon,
						items: [],
					},
					{
						title: "Typography",
						href: "/",
						icon: TypeIcon,
						items: [],
					},
					{
						title: "Changelog",
						href: "/",
						icon: GitCommitVerticalIcon,
						items: [],
					},
				],
			},
		],
	},
};
