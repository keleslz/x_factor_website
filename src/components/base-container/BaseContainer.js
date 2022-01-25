import useTheme from "@src/hooks/useTheme";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

const BaseContainer = ({children}) => {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0,0);
    }, [location.pathname])


    const getClassName = useTheme()[1];
    return <div className={`${getClassName()} pb-20`} >
        {children}
    </div>
}

export default BaseContainer;
