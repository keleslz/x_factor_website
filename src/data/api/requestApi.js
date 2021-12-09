/**
 * @param {string} url
 * @param {string} method
 * @param {object} options
 * @return {[]}
 */
const requestApi = async (url , method, options= {}) => {
    const res = await fetch(url, {
        ...options,
        method: method,
    });
    return await res.json();
}

export default requestApi;
