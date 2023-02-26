export function toSessionStorage(key: string, data: any) {
    sessionStorage.setItem(key, JSON.stringify(data));
}

export function fromSessionStorage(key: string) {
    return JSON.parse(sessionStorage.getItem(key) || "{}");
}

const sessionStorageService = {
    toSessionStorage,
    fromSessionStorage
};

export default sessionStorageService;
