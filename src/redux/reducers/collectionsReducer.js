/**
 * @type {{items: Nft[]}}
 */
const init = {
    items : []
}
const ADD_COLLECTIONS = 'ADD_COLLECTIONS';

export const addCollectionsActionType = () => ADD_COLLECTIONS;

/**
 * @param values
 * @return {{type: string, value}}
 */
export const setCollections = (values) => {
    return {
        type: ADD_COLLECTIONS,
        items: values
    }
}

/**
 *
 * @param {object} state
 * @param {object} action
 * @param {array} action.items are passed by setCollections function called on dispatch function
 *
 * @return {{items: Nft[]}}
 */
const collectionsReducer = (state = init, action) => {
    console.log(state,'state',action, 'action')
    switch (action.type) {
        case ADD_COLLECTIONS:
            return {
                ...state,
                items : state.items.concat(action.items)
            };
        default:
            return state;
    }
}

export  default collectionsReducer;

