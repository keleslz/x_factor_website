const Card = ({title, description}) => {
    return <div className="max-w-xs rounded-md overflow-hidden shadow-lg my-2 mx-2">
        <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-grey-darker text-base">{description}</p>
        </div>

    </div>
}

export default Card;
