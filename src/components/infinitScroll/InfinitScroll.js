import React from "react";
import Loader from "@components/loader/Loader";
import InfiniteScroll from "react-infinite-scroll-component";

/**
 * Do something when scroll bar it 's to window bottom
 *
 * @param {array} items
 *
 * @param {callback} next a function which must be called
 *  after reaching the bottom It must trigger some sort of action
 *  which fetches the next data. The data is passed as children to
 *  the InfiniteScroll component and the data should contain previous
 *  items too. e.g. Initial data = [1, 2, 3] and then next load of data
 *  should be [1, 2, 3, 4, 5, 6]
 *
 * @param {callback} elementToReturn A callback with item on params must return
 * a JSX component
 *
 * @param {boolean} hasMore tells the InfiniteScroll component on whether
 *  to call next function on reaching the bottom and shows an endMessage to
 *  the user
 *
 * @param {node} loader you can send a loader component to show while the component
 *  waits for the next load of data. e.g. <h3>Loading...</h3> or any fancy loader
 *  element
 *
 * @param {number} scrollThreshold A threshold value defining when InfiniteScroll will
 *  call next. Default value is 0.8. It means the next will be called when user comes
 *  below 80% of the total height. If you pass threshold in pixels (scrollThreshold="200px"),
 *  next will be called once you scroll at least (100% - scrollThreshold) pixels down.
 *
 * @param {callback} onScroll a function that will listen to the scroll event on the
 * scrolling container. Note that the scroll event is throttled, so you may not receive
 *  as many events as you would expect.
 *
 * @param {node} endMessage this message is shown to the user when he has seen all the records
 *  which means he's at the bottom and hasMore is false
 *
 * @param {string} className add any custom class you want
 *
 * @param {number } height	optional, give only if you want to have a fixed height scrolling content
 *
 * @param {callback} elementToReturn Compomnent must be returned
 *
 * @param {callback} endMessage JSX Component must be returned
 *
 * @param {number} endMessage JSX Component must be returned
 *
 * @return {InfiniteScroll}
 */
const InfinitScroll = ({items, next, elementToReturn, hasMore, endMessage = null, paddingBottom = null}) => {

    const styles = {
        paddingBottom: paddingBottom ? `${paddingBottom}px` : "70px",
        overflow: 'hidden'
    }

    return <InfiniteScroll
        dataLength={items.length} //This is important field to render the next data
        next={next}
        hasMore={hasMore}
        loader={<Loader />}
        endMessage={endMessage ? endMessage() : <></>}
        style={styles}
    >
        {elementToReturn(items)}
    </InfiniteScroll>
}

export default InfinitScroll;
