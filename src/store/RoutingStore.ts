import type { Router } from "@roxi/routify/typings/lib/runtime/Router/Router";

type TabItem = { id: number, displayName: string, path: string };
export const Tabs = [
    { id: 0, displayName: "Home", path: "/"},
    { id: 1, displayName: "Work", path: "/Work"},
    { id: 2, displayName: "Blogs", path: "/Blogs"},
    { id: 3, displayName: "About", path: "/About"},
] as TabItem[];

export function GoToPath(router: Router, path: string) {
    router.url.push(path);
}