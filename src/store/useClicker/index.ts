import { create } from "zustand";
import { INCREMENT_VALUE } from "../../shared/config";

type Store = {
    count: number;
}

type Actions = {
    increment: () => void;
}

const useClicker = create<Store & Actions>((set) => ({
    count: 5000,
    increment: () => {
        set((state) => ({
            count: state.count + INCREMENT_VALUE,
        }))
    }
}))

export default useClicker;