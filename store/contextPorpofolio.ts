import { create } from "zustand";

interface PorfolioState {
    page: number;
    size: number;

    currentModule: string | null;

    setPage: (value: number) => void;
    setSize: (value: number) => void;

    setModule: (module: string) => void;
    reset: () => void;
}

export const usePorfolioStore = create<PorfolioState>((set) => ({
    page: 1,
    size: 10,
    currentModule: null,

    setPage: (value) => set({ page: value }),
    setSize: (value) => set({ size: value }),

    setModule: (module) => set({ currentModule: module }),
    reset: () => set({ page: 1, size: 10 })
}));
