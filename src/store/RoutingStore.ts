import { writable } from "svelte/store";

type TabItem = { id: number, displayName: string, path: string };
export const Tabs = [
    { id: 0, displayName: "Home", path: "/"},
    { id: 1, displayName: "PlanWard", path: "/PlanWard"},
    { id: 2, displayName: "Blogs", path: "/Blogs"},
    { id: 3, displayName: "About", path: "/About"},
] as TabItem[];

export function GoToPath(path: string) {
    history.pushState({}, "", path);
}