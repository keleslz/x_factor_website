/**
 * @param {string} url
 * @param {string} method
 * @param {object} options
 * @return {JSONifiable|Error}
 */
const requestApi = async (url , method, options= {}) => {
    const res = await fetch(`http://localhost:8000/api/${url}`, {
        ...options,
        method: method,
    });

    if (res.status === 200)
    {
        const data = await res.json();
        return data;
    }

    return new Error(res.statusText);
}

export default requestApi;
