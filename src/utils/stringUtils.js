/**
 *  One collection name
 * @param {object : {}} collection
 */
export const getCollectionName = (collection) => {
    return Object.keys(collection).toString();
}

/**
 * @param string
 * @return {string}
 */
export const firstUpperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
