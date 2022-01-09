/**
 * @param { number} collectionLength
 * @param {object} collections
 * @param {number|null} startIndex index to start to split collection which must be return
 * @param {number|null} endIndex index to start to split collection which must be return
 */
export const getTwoLastCollections = (collectionLength, collections , startIndex = null, endIndex = null) => {
    const collectionsLength = collections.length;
    const lastIndex = collectionsLength - 1;
    const beforeLastIndex = collectionsLength - 2;

    let data = [];
    let i = 0

    for (const collection in collections) {
        if(i === lastIndex || i === beforeLastIndex)
        {
            if(startIndex === null)
            {
                console.log(data)
                // data[collection] = collections[collection];
            }else {
                // data[collection] = [...collections[collection]].slice(startIndex, endIndex);
                console.log(data, collection)
            }
        }
        i++;
    }

    console.log(data)

    return data;
}

/**
 * @param {object} obj
 * @return {[number, undefined][]}
 */
export const convertObjectToArray = (obj) => {
    return Object.keys(obj).map((key, i) => obj[key]);
}
