'use client';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type AllState = 'Dashboard' | 'Booking' | 'FAQ';

interface NavbarState {
    current: AllState;
    switch: (section: AllState) => void;
}

export const useNavbarStore = create(
    immer<NavbarState>((set) => ({
        current: 'Dashboard',
        switch: (section) =>
            set((state) => {
                state.current = section;
            }),
    })),
);
