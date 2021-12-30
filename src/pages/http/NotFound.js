import FullContainer from "@components/container/Container";
import {Link} from "react-router-dom";

const NotFound = () => {
    return <FullContainer className="h-full center flex flex-col">
        <h1 className="w-full text-center pl-5 font-semibold text-4xl mb-4">Not Found</h1>
            <h2 className="w-full text-center pl-5 font-semibold text-4xl ">404</h2>
            <Link className="w-full text-center pl-5 font-semibold text-4xl text-blue-600 underline"  to="/">Go home</Link>
    </FullContainer>
}

export default NotFound;
