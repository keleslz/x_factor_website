/**
 * @param children
 * @return {JSX.Element}
 * @constructor
 */
const FullContainer = ({children}) => {
    return<div
        className="rounded-t-lg shadow-lg full-container bg-center bg-gray-50 w-6/12 pt-48 pb-24 flex center flex-col transition ease-in-out duration-700"
    >
        {children}
    </div>
}

export default FullContainer;
