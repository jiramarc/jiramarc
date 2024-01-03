"use client";

import { create } from "zustand";

import { TeamForm } from "@/components/forms/team-form";
import { Modal } from "@/components/modals/modal";

type UseTeamModal = {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
};

const useTeamModal = create<UseTeamModal>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));

type TeamModalProps = {};

const TeamModal = ({}: TeamModalProps) => {
	const teamModal = useTeamModal();

	return (
		<Modal
			title="Manage a team"
			description="Create a new team or join an existing one."
			isOpen={teamModal.isOpen}
			onClose={() => teamModal.onClose()}>
			<TeamForm />
		</Modal>
	);
};

export { TeamModal, useTeamModal };
