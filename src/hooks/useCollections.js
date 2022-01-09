import {useDispatch} from "react-redux";
import {useEffect} from "react";
import requestApi from "@data/api/requestApi";
import {add as addMetas} from "@redux/reducers/collectionsMetaReducer";
import {add as addItems} from "@redux/reducers/collectionsReducer";
import { basic } from "@redux/reducers/errorReducer";

const useCollections = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const setMetasAndCollections = async () => {
            const metasCollections = await requestApi('collections');

            if(!(metasCollections instanceof Error))
            {
                dispatch(addMetas(metasCollections.collections))

                for (let i = 0; i < metasCollections.collections.length; i++) {
                    const c = metasCollections.collections[i];
                    setCollection(c.name)
                }
                return;
            }
            dispatch(basic());
        }
        setMetasAndCollections();
    }, [])

    /**
     * Set collection if not already registered
     * @param {string} collection
     * @param {number} limit default = 20
     * @return {void}
     */
    const setCollection = async (collection, limit = 20) => {
        const data = await requestApi(`nfts?collection=${collection}&limit=${limit}`, 'GET');
        if (!(data instanceof Error)) {
            let res = [];
            res[collection] = data.collection;
            dispatch(addItems({...res}));
            return;
        }
        basic();
    }
}

export default useCollections;
