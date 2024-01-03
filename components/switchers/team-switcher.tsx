"use client";

import { CheckIcon, ChevronsUpDownIcon, PlusCircleIcon } from "lucide-react";
import React from "react";

import { Button, ButtonProps } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

type TeamSwitcherProps = ButtonProps & {};

const groups = [
	{
		label: "Marvel",
		teams: [
			{
				label: "Avengers",
				value: "avengers",
			},
			{
				label: "Guardian of the Galaxy",
				value: "guardian of the galaxy",
			},
		],
	},
	{
		label: "DC",
		teams: [
			{
				label: "Justice League",
				value: "justice league",
			},
		],
	},
];
type Team = (typeof groups)[number]["teams"][number];

const TeamSwitcher = ({ className }: TeamSwitcherProps) => {
	const [comboboxIsOpen, setComboboxIsOpen] = React.useState<boolean>(false);
	const [selectedTeam, setSelectedTeam] = React.useState<Team>(groups[0].teams[0]);

	return (
		<Popover
			open={comboboxIsOpen}
			onOpenChange={setComboboxIsOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={comboboxIsOpen}
					aria-label="Select a team"
					className={cn("h-8 w-52 justify-between", className)}>
					{selectedTeam.label}
					<ChevronsUpDownIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-52 p-0">
				<Command>
					<CommandInput placeholder="Search teams..." />
					<CommandList>
						<CommandEmpty>No team found.</CommandEmpty>
						{groups.map((group, groupIndex) => (
							<CommandGroup
								key={groupIndex}
								heading={group.label}>
								{group.teams.map((team, teamIndex) => (
									<CommandItem
										key={teamIndex}
										onSelect={() => {
											setSelectedTeam(team);
											setComboboxIsOpen(false);
										}}
										className="text-sm">
										<CheckIcon className={cn("mr-2 h-4 w-4", selectedTeam.value === team.value ? "opacity-100" : "opacity-0")} />
										{team.label}
									</CommandItem>
								))}
							</CommandGroup>
						))}
					</CommandList>
					<CommandSeparator />
					<CommandList>
						<CommandGroup>
							<CommandItem onSelect={() => {}}>
								<PlusCircleIcon className="mr-2 h-4 w-4" />
								Create team
							</CommandItem>
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
};

export { TeamSwitcher };
