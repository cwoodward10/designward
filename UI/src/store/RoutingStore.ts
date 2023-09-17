import type { Router } from "@roxi/routify/typings/lib/runtime/Router/Router";

type TabItem = { 
    id: number, 
    displayName: string, 
    description?: string,
    path: string 
};
export const Tabs = [
    { 
        id: 0, 
        displayName: "Home",
        description: "A repository of work from an architectural designer turned creative developer.",
        path: "/"
    },
    { 
        id: 1, 
        displayName: "Work",
        path: "/Work"
    },
    { 
        id: 2, 
        displayName: "Blogs",
        path: "/Blogs"
    },
    { 
        id: 3, 
        displayName: "About Me",
        path: "/About"
    },
] as TabItem[];

export function GoToPath(router: Router, path: string) {
    router.url.push(path);
}