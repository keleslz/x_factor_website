import FullContainer from "@components/container/Container";
import {useEffect, useState} from "react";
import InfinitScroll from "@components/infinitScroll/InfinitScroll";
import requestApi from "@data/api/requestApi";
import NftCard from "@components/nftCard/NftCard";

const FirstPart = () => {
    const [items, setItems] = useState([]);
    const [hasMore, setHasMore] = useState([]);

    useEffect(() => {
        fetchMore();
    }, [])

    const itemsToReturn = () => {
        return items.map((e, i) => <NftCard key={e.id} item={e} />)
    }

    const fetchMore =  () => {
        const data =  requestApi('https://jsonplaceholder.typicode.com/todos', 'GET');
        setItems(items.concat(data));

        if(/*items.length === parseInt(data?.max_result)*/ items.length > 1_111)
        {
            setHasMore(!hasMore);
            return ;
        }
    }

    return <FullContainer>
        {<InfinitScroll
            items={items}
            next={fetchMore}
            elementToReturn={itemsToReturn}
            hasMore={hasMore}
        />}
    </FullContainer>
}

export default FirstPart;
