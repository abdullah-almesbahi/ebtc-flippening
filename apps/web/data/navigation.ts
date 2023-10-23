interface NavigationType {
    id: number;
    name: string;
    path?: string | undefined;
    dropdown?: {
        id: number;
        name: string;
        path?: string | undefined;
        dropdown?: {
            id: number;
            name: string;
            path: string;
        }[];
    }[];
}

export const navigation: NavigationType[] = [
    {
        id: 1,
        name: "Home",
        path: "/",
    },
    {
        id: 2,
        name: "Leaderboard",
        path: "/leaderboard",
    },
    {
        id: 3,
        name: "Shares",
        path: "/shares",
    },
];
