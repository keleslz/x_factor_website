const Sail = ({children, isHidden = false}) =>
    <div className={`inset-0 fixed bg-black ${isHidden ? 'hidden' : ''} `}>
        <div className="flex center z-40  w-full h-full">
            {children}
        </div>
    </div>

export default Sail;
