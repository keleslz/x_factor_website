/**
 * @param children
 * @return {JSX.Element}
 * @constructor
 */
const FullContainer = ({children, className = ''}) => {
    return<div
        className={`container px-2 mx-auto rounded-t-lg full-container w-6/12 pt-8 pb-24 transition ease-in-out duration-700 ${className} `}
    >
        {children}
    </div>
}

export default FullContainer;
