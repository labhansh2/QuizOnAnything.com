export function store(key, data) {
    window.localStorage.setItem(key, JSON.stringify(data));
}

export function retrieve(key) {
    if (window.localStorage.getItem(key)) {
        return JSON.parse(window.localStorage.getItem(key));
    }
}
