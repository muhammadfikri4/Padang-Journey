import { create } from "zustand";

const useStore = create((set) => ({
  findActive: false,
  setFindActive: () => set((state) => ({ findActive: !state.findActive })),
}));

export default useStore;
