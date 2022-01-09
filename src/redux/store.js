import {configureStore} from '@reduxjs/toolkit'
import metas from "./reducers/collectionsMetaReducer";
import collections from "./reducers/collectionsReducer";
import error from "./reducers/errorReducer";

export default configureStore({
    reducer: {
        collectionsMetas : metas,
        collections : collections,
        error : error
    }
})
