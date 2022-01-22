import {useSelector} from "react-redux";
import CardChangeAuto from "@components/card-change-auto/CardChangeAuto";
import Button from "@components/button/Button";
import {Link} from "react-router-dom";
import Glych from "../../../components/react-vfx/Glych";
import {VFXSpan} from "react-vfx";

const CategoryRow = () => {
    const collections = useSelector(state => state.collections.items);

    const getCollectionName = (collection) => {
        return Object.keys(collection).toString();
    }

    return <div className="bg-white py-4 bg-white font-bold text-gray-900 ">


        <h2 className="font-bold text-4xl text-center my-4">Discover {collections.length > 1 ? "collections" : "collection"}</h2>

        <div className=" flex-wrap md:flex center">

            {collections?.map( (collection, i) => <div key={i} className="m-5">

                <div className="md:hidden w-full">

                    <h2 className="text-4xl mb-4 text-center mt-6">{getCollectionName(collection).toUpperCase()}</h2>

                    <CardChangeAuto collection={collection} isFullWidth={true} />

                    <div className="flex center">
                        <Link to={`/collection/:name`}>
                            <Button type="big" color="gray" onClick={() => console
                                .log('click')}>
                                <Glych>
                                    <VFXSpan shader="rgbShift">
                                        Show More
                                    </VFXSpan>
                                </Glych>
                            </Button>
                        </Link>
                    </div>

                </div>

                <div className="hidden md:inline-block">
                    <CardChangeAuto collection={collection} />
                    <div className="flex center">
                        <Link to={`/collection/:name`}>
                            <Button children="Show More" type="big" color="gray" onClick={() => console
                            .log('click')}/>
                        </Link>
                    </div>
                </div>

                <div className="mb-0 md:hidden md:mb-12 h-12"></div>

            </div>)}
        </div>
    </div>
}

export default CategoryRow;
