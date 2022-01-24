import useTheme from "@src/hooks/useTheme";

const BaseContainer = ({children}) => {
    const getClassName = useTheme()[1];
    return <div className={getClassName()} >
        {children}
    </div>
}

export default BaseContainer;
