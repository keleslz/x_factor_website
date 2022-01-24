const CardContainer = ({
   children,
   className = "max-w-xs rounded-md overflow-hidden shadow-lg my-2 mx-2"}) =>
{
    return <div className={className}>
        {children}
    </div>
}

export default CardContainer;
