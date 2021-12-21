export default function Button({
    children,
    type = 'normal',
    bg = 'transparent',
    color = 'black',
    onClick,
    onMouseOver,
    onMouseOut
})
{
    const classNames = [
        {
            type : 'big',
            className : `mx-2 transition hover:shadow-lg px-4 py-2 rounded-md text-2xl font-bold bg-${bg}-400 text-${color} hover:bg-${bg}-500 hover:text-${color}-600`
        },
        {
            type : 'normal',
            className : `mx-2 transition hover:shadow-lg px-4 py-2 rounded-md text-xl font-bold bg-${bg}-400 text-${color} hover:bg-${bg}-500 hover:text-${color}-600`
        }
    ]

    const className =  classNames.filter(c => c.type === type);

    return <button
            onClick={() => onClick && onClick()}
            onMouseOver={() => onMouseOver && onMouseOver()}
            onMouseOut={() => onMouseOut && onMouseOut()}
            className={className[0].className || '' }
        >
        {children}
    </button>
}
