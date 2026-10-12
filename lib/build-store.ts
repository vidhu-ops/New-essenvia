"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { defaultBuildSelections, type BuildSelections } from "@/lib/build-types";

type BuildState = {
  selections: BuildSelections;
  setSelections: (partial: Partial<BuildSelections>) => void;
  reset: () => void;
};

export const useBuildStore = create<BuildState>()(
  persist(
    (set) => ({
      selections: defaultBuildSelections,
      setSelections: (partial) => set((s) => ({ selections: { ...s.selections, ...partial } })),
      reset: () => set({ selections: defaultBuildSelections }),
    }),
    { name: "essentra-build" },
  ),
);
