export default function Button({
    children,
    type = 'normal',
    bg = 'transparent',
    color = 'black',
    onClick,
    onMouseOver,
    onMouseOut,
    className = ''
})
{
    const classNames = [
        {
            type : 'big',
            className : `mx-2 transition shadow-md hover:shadow-lg px-4 py-2 rounded-md text-2xl font-bold bg-${bg}-400 text-${color} hover:bg-${bg}-500 hover:text-${color}-600`
        },
        {
            type : 'normal',
            className : `mx-2 transition shadow-md hover:shadow-lg px-4 py-2 rounded-md text-xl font-bold bg-${bg}-400 text-${color} hover:bg-${bg}-500 hover:text-${color}-600`
        }
    ]

    const basicClassName =  classNames.find(c => c.type === type.toLowerCase());

    return <button
            onClick={() => onClick && onClick()}
            onMouseOver={() => onMouseOver && onMouseOver()}
            onMouseOut={() => onMouseOut && onMouseOut()}
            className={`${basicClassName?.className} ${className}` || `${className}` }
        >
        {children}
    </button>
}
