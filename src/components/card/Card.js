const Card = ({title, description}) => {
    return <div className="max-w-xs rounded-md overflow-hidden shadow-lg my-2 mx-2">
        <img
            className="mb-4 w-full cursor-pointer delay-100 duration-300 transform transition ease-in-out hover:scale-125 hover:mb-10"
             src="https://tailwindcss.com/img/card-top.jpg"
             alt="Sunset in the mlaountains"
        />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-grey-darker text-base">{description}</p>
        </div>
    </div>
}

export default Card;
