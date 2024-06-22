import { create } from "zustand";

interface WebAppUser {
    id: number;
    is_bot?: boolean;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code?: string;
    is_premium?: boolean;
    photo_url?: string;
  }

type TelegramUserStore = WebAppUser & {
    added_to_attachment_menu?: boolean;
    allows_write_to_pm?: boolean;
  };

type Store = {
    id: number;
    userName: string;
    firstName?: string;
    lastName?: string;
    languageCode: string;
    photoUrl?: string;
}

type Actions = {
    init: (initValue: TelegramUserStore) => void;
    clear: () => void;
}

const useUserData = create<Store & Actions>((set) => ({
    id: 0,
    userName: "",
    firstName: undefined,
    lastName: undefined,
    languageCode: "en",
    allowsWriteToPm: false,
    photoUrl: undefined,
    init: ({ id, username = "", first_name, last_name, language_code, photo_url }) => {
        set({ 
            id, 
            userName: username, 
            firstName: first_name || "aboba", 
            lastName: last_name || "aboba", 
            languageCode: language_code, 
            photoUrl: photo_url,
        });
    },
    clear: () => {
        set({
            firstName: undefined,
            lastName: undefined,
        });
    },
}));

export default useUserData;