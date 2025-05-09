export const debounce = (callback: any, wait: number = 300) => {
    let timeoutId: number | null = null;
    return (...args: any[]) => {
        if (timeoutId) {
            window.clearTimeout(timeoutId);
        }
        timeoutId = window.setTimeout(() => {
            callback(...args);
        }, wait);
    };
}