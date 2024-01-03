"use client";

import { PackageIcon, PowerIcon, SettingsIcon, User2Icon } from "lucide-react";
import { useRouter } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

type UserDropdownMenuProps = {};

const UserDropdownMenu = ({}: UserDropdownMenuProps) => {
	const router = useRouter();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					className="relative h-8 w-8 rounded-full">
					<Avatar className="h-8 w-8">
						<AvatarImage
							src="/avatars/01.png"
							alt="@jiramarc"
						/>
						<AvatarFallback>JP</AvatarFallback>
					</Avatar>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className="w-56"
				align="end"
				forceMount>
				<DropdownMenuLabel className="font-normal">
					<div className="flex flex-col space-y-1">
						<p className="text-sm font-medium leading-none">@Jiramarc</p>
						<p className="text-xs leading-none text-muted-foreground">jiranop.phinyo@gmail.com</p>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem onSelect={() => router.push("/profile/experience")}>
						<User2Icon className="mr-2 h-4 w-4" />
						Profile
					</DropdownMenuItem>
					<DropdownMenuItem onSelect={() => router.push("/components")}>
						<PackageIcon className="mr-2 h-4 w-4" />
						Compnents
					</DropdownMenuItem>
					<DropdownMenuItem onSelect={() => router.push("/settings")}>
						<SettingsIcon className="mr-2 h-4 w-4" />
						Settings
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem onSelect={() => router.push("/")}>
						<PowerIcon className="mr-2 h-4 w-4" />
						Log out
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export { UserDropdownMenu };
