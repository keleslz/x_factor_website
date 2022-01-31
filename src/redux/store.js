import {configureStore} from '@reduxjs/toolkit'
import metas from "./reducers/collectionsMetaReducer";
import collections from "./reducers/collectionsReducer";
import error from "./reducers/errorReducer";
import wallet from "./reducers/walletReducer";
import theme from "./reducers/themeReducer";

export default configureStore({
    reducer : {
        collectionsMetas : metas,
        collections : collections,
        error : error,
        wallet : wallet,
        theme : theme
    }
})
