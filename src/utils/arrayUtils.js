/**
 * @param {object} obj
 * @return {[number, undefined][]}
 */
export const convertObjectToArray = (obj) => {
    return Object.keys(obj).map((key, i) => obj[key]);
}
