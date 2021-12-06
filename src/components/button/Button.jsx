export default function Button({
    children,
    type = 'normal',
    bg = 'transparent',
    color = 'black',
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

    return <button className={className[0].className || '' }>
        {children}
    </button>
}
