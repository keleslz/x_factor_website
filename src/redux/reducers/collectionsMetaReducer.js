const ADD_COLLECTIONS_METAS = 'ADD_COLLECTIONS_METAS';

export const getCollectionsMetas = () => ADD_COLLECTIONS_METAS;

export const setCollections = (values) => {
    return {
        type: ADD_COLLECTIONS_METAS,
        value: values
    }
}


const collectionReducer = (state = [], action) => {
    console.log(state, action)
    switch (action.type) {
        // case 'ADD_COLLECTIONS_METAS':
        //     return state.concat(action);
        default:
            return state;
    }
}

export  default collectionReducer;

