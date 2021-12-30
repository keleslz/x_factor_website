import FullContainer from "@components/container/Container";
import {Link, useParams} from "react-router-dom";

const InternalError = () => {
    const {code} = useParams();

    return <FullContainer className="h-full center flex flex-col">
        <h1 className="w-full text-center pl-5 font-semibold text-4xl mb-4">Internal Error</h1>
        <h2 className="w-full text-center pl-5 font-semibold text-4xl ">500</h2>
        <h2 className="w-full text-center pl-5 font-semibold text-red-500 text-2xl my-4">Code : {code}</h2>
        <Link className="w-full text-center pl-5 font-semibold text-4xl text-blue-600 underline"  to="/">Go home</Link>
    </FullContainer>
}

export default InternalError;
