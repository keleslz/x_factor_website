/**
 * Use localstorage
 */
export default class LocalStorage {

    /**
     * @type {{collectionsMetas: string, collections: string}}
     */
    static keysAvailable = {
        collections : 'collections',
        collectionsMetas : 'collections_metas'
    }

    constructor() {
        this.localStorage = window.localStorage;
    }

    /**
     * Add data on key
     * @param string key
     * @param JSONifiable data
     */
    add(key, data) {
        this.localStorage.setItem(key, JSON.stringify(data));
    }

    /**
     * Get data by key
     * @param string|null key
     */
    get(key) {
        return JSON.parse(this.localStorage.getItem(key));
    }

    /**
     * Remove data by key
     * @param string key
     */
    remove(key) {
        localStorage.removeItem(key);
        return true;
    }
}
