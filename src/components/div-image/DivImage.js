/**
 * Get a div width imageBackground etc already set
 * @param {JSX.Element} children
 * @param {string} path
 * @return {JSX.Element}
 * @constructor
 */
const DivImage = ({children, path, style}) => {
    return <div style={{
        ...style,
        backgroundImage: `url("${path}")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize : 'contains',
        height : '200px'
    }}
    >
        {children && children}
    </div>
}

export default DivImage;
