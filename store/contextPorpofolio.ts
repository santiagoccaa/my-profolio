import { ProjectPorfolio } from "@/constants/projects";
import { create } from "zustand";

interface PorfolioState {
    openModal: boolean;
    setOpenModal: (value: boolean) => void;
    project: ProjectPorfolio | null
    setProject: (value: ProjectPorfolio) => void
}

export const usePorfolioStore = create<PorfolioState>((set) => ({
    openModal: false,
    setOpenModal: (value) => set({ openModal: value }),
    project: null,
    setProject: (value) => set({ project: value })
}));
