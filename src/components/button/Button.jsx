export default function Button({
    children,
    type = 'normal',
    bg = 'transparent',
    color = 'black',
    onClick
})
{
    const classNames = [
        {
            type : 'big',
            className : `transition hover:shadow-lg px-4 py-2 rounded-md text-2xl font-bold bg-${bg}-400 text-${color} hover:bg-${bg}-500 hover:text-${color}-600`
        },
        {
            type : 'normal',
        }
    ]

    const className =  classNames.filter(c => c.type === type);

    return <button onClick={() => onClick && onClick()} className={className[0].className || '' }>
        {children}
    </button>
}
