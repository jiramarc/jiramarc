import { create } from "zustand";

import { timelines } from "@/app/profile/data";

type UseTimeline = {
	selectedId: string;
	handleSelectTimeline: (id: string) => void;
};

export const useTimeline = create<UseTimeline>((set) => ({
	selectedId: timelines[0].id,
	handleSelectTimeline: (id) => set({ selectedId: id }),
}));
